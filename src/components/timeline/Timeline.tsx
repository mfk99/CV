import { motion } from "motion/react";
import "./Timeline.css";

export default function TimelineContainer() {
  return (
    <div id="timeline-grid">
      <motion.div
        id="timeline-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ color: "#fff", textAlign: "left" }}>Education</h2>
        <Education />
      </motion.div>
      <motion.div id="timeline-container">
        <h2 style={{ color: "#fff", textAlign: "left" }}>Timeline</h2>
        <Timeline />
      </motion.div>
    </div>
  );
}

function Education() {
  return <div>Yes, I have gone to school</div>;
}

function Timeline() {
  return <div>Give a timeline of education and work here.</div>;
}
