import { motion } from "motion/react";
import "./Grid.css";
import { Education } from "../education/Education";
import { Timeline } from "../timeline/Timeline";
import Header from "../header/Header";
import { ProgrammingSkills } from "../programming-skills/ProgrammingSkills";
import { Projects } from "../projects/Projects";
import { GeneralSkills } from "../general-skills/GeneralSkills";

export default function Grid() {
  return (
    <>
      <Header />
      <div id="skills-grid">
        <motion.div
          id="skills-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Education />
        </motion.div>
        <motion.div
          id="skills-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <ProgrammingSkills />
        </motion.div>
        <motion.div
          id="skills-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Projects />
        </motion.div>
      </div>
      <div id="timeline-grid">
        <motion.div
          id="timeline-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <GeneralSkills />
        </motion.div>
        <motion.div
          id="timeline-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Timeline />
        </motion.div>
      </div>
    </>
  );
}
