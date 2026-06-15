import { motion } from "motion/react";
import { useState, useMemo } from "react";
import type { PositionedEvent } from "./events";
import { events } from "./events";
import "./Timeline.css";

const CARD_WIDTH = 400;
const CARD_HEIGHT = 240;
const CARD_GAP = 50;

const LANE_WIDTH = 50;
const ROW_HEIGHT = 120;

function getCardPosition(event: PositionedEvent) {
  const x =
    event.side === "left"
      ? event.x - CARD_WIDTH - CARD_GAP
      : event.x + CARD_GAP;

  const y = event.y + (event.yOffset ?? 0);

  return { x, y };
}

export function Timeline() {
  const [hovered, setHovered] = useState<string | null>(null);

  const minLane = Math.min(...events.map((e) => e.lane));
  const maxLane = Math.max(...events.map((e) => e.lane));

  const CENTER_X = 1000 / 2;

  const totalLaneWidth = (maxLane - minLane) * LANE_WIDTH;
  const startX = CENTER_X - totalLaneWidth / 2;

  const positionedEvents = useMemo(
    () =>
      events.map((event, index) => ({
        ...event,
        x: startX + (event.lane - minLane) * LANE_WIDTH,
        y: index * ROW_HEIGHT + 80,
      })),
    [],
  );

  const svgHeight = Math.max(...positionedEvents.map((e) => e.y)) + 50;

  return (
    <>
      <h2 style={{ color: "#fff", textAlign: "left" }}>Timeline</h2>
      <svg
        width="100%"
        height={svgHeight}
        viewBox={`0 0 1000 ${svgHeight}`}
        overflow="visible"
      >
        {/* Git graph connections */}
        {positionedEvents.map((event) => {
          if (!event.parent) return null;

          const parent = positionedEvents.find((e) => e.id === event.parent);

          if (!parent) return null;

          return (
            <motion.path
              key={`${parent.id}-${event.id}`}
              d={`
              M ${parent.x} ${parent.y}
              V ${(parent.y + event.y) / 2}
              H ${event.x}
              V ${event.y}
            `}
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
            />
          );
        })}

        {positionedEvents.map((event) => {
          const cardPos = getCardPosition(event);

          const targetX =
            event.side === "left" ? cardPos.x + CARD_WIDTH : cardPos.x;

          const targetY = cardPos.y + CARD_HEIGHT / 2;

          const connectorPath = `
          M ${event.x} ${event.y}
          C ${event.x} ${targetY},
            ${targetX} ${targetY},
            ${targetX} ${targetY}
        `;

          return (
            <g
              key={event.id}
              onMouseEnter={() => setHovered(event.id)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Node -> Card connector */}
              <motion.path
                d={connectorPath}
                fill="none"
                stroke="#94a3b8"
                strokeWidth={2}
                strokeDasharray="3 6"
              />

              {/* Timeline node */}
              <motion.circle
                cx={event.x}
                cy={event.y}
                r={6}
                fill="#3fb950"
                animate={{
                  r: hovered === event.id ? 9 : 6,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />

              {/* Card */}

              <foreignObject
                x={cardPos.x}
                y={cardPos.y}
                width={CARD_WIDTH}
                height={event.eventCardSize ?? CARD_HEIGHT}
              >
                <motion.div
                  style={{
                    width: "100%",
                    height: "100%",

                    backgroundColor: "#202020",
                    border: "1px solid #d1d5db",
                    borderRadius: "12px",

                    padding: "16px",

                    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
                    boxSizing: "border-box",
                  }}
                  animate={{
                    // scale: hovered === event.id ? 1.04 : 1,
                    opacity:
                      hovered === null ? 1 : hovered === event.id ? 1 : 0.7,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  <div id="timeline-card">
                    <h2 id="timeline-card-title">{event.title} </h2>
                    <div id="timeline-card-date">{event.date}</div>
                  </div>
                  {event.description && (
                    <p id="timeline-card-desc">{event.description}</p>
                  )}
                </motion.div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </>
  );
}
