import { useEffect, useRef } from "react";

export default function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const spacing = 44;
    const dots: any[] = [];

    // Create grid
    for (let x = spacing / 2; x < width; x += spacing) {
      for (let y = spacing / 2; y < height; y += spacing) {
        dots.push({
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          baseSize: 2,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    let mouse = { x: width / 2, y: height / 2 };

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // 🌊 Ripple system
    let ripples = [];
    let lastRippleTime = 0;

    function animate(time: number) {
      ctx.clearRect(0, 0, width, height);

      // ⏱ Spawn ripple every ~4s (synced with animation)
      if (time - lastRippleTime > 4000) {
        ripples.push({
          x: 308,
          y: 308,
          startTime: time,
        });
        lastRippleTime = time;
      }

      dots.forEach((dot) => {
        // =========================
        // 🖱️ Mouse force
        // =========================
        const mdx = dot.x - mouse.x;
        const mdy = dot.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);

        const maxDist = 120;

        if (mdist > 0 && mdist < maxDist) {
          const force = (1 - mdist / maxDist) * 2;

          dot.vx += (mdx / mdist) * force;
          dot.vy += (mdy / mdist) * force;
        }

        // =========================
        // 🌊 Ripple forces
        // =========================
        ripples.forEach((ripple) => {
          const rdx = dot.x - ripple.x;
          const rdy = dot.y - ripple.y;
          const rdist = Math.hypot(rdx, rdy);

          const elapsed = time - ripple.startTime;
          const waveRadius = elapsed * 0.45;

          const ringWidth = 60 + waveRadius * 0.02;
          const diff = rdist - waveRadius;

          if (Math.abs(diff) < ringWidth) {
            const strength = Math.cos((diff / ringWidth) * Math.PI) * 0.5 + 0.5;

            const nx = rdx / (rdist || 1);
            const ny = rdy / (rdist || 1);

            const force = strength * 2;

            dot.vx += nx * force;
            dot.vy += ny * force;
          }
        });

        // =========================
        // 🪀 Spring back to origin
        // =========================
        const spring = 0.05;
        dot.vx += (dot.ox - dot.x) * spring;
        dot.vy += (dot.oy - dot.y) * spring;

        // =========================
        // 🧴 Damping (smooth motion)
        // =========================
        dot.vx *= 0.6;
        dot.vy *= 0.6;

        // =========================
        // 🚀 Move
        // =========================
        dot.x += dot.vx;
        dot.y += dot.vy;

        // =========================
        // ✨ Subtle idle pulse
        // =========================
        const pulse = Math.sin(time * 0.002 + dot.phase) * 0.5;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.baseSize + pulse, 0, Math.PI * 2);

        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgba(255,255,255,0.8)";
        ctx.fillStyle = "rgba(255,255,255,0.8)";
        ctx.fill();
      });

      // 🧹 Cleanup old ripples
      ripples = ripples.filter((r) => time - r.startTime < 8000);

      requestAnimationFrame(animate);
    }

    animate(0);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => {
      // cleanup listeners
      window.removeEventListener("mousemove", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
