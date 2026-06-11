import { motion } from "motion/react";
import "./Timeline.css";

export default function Timeline() {
  return (
    <div id="timeline-grid">
      <motion.div
        id="timeline-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 style={{ color: "#fff", textAlign: "left" }}>
          Programming Languages
        </h2>
        <ProgrammingSkills />
      </motion.div>
      <motion.div id="timeline-container">
        <h2 style={{ color: "#fff", textAlign: "left" }}>Skills</h2>
        <GeneralSkills />
      </motion.div>
    </div>
  );
}

interface ProgrammingSkill {
  language: string;
  proficiency: "Beginner" | "Intermediate" | "Skilled";
}

const proficiencyMap = {
  Beginner: 30,
  Intermediate: 50,
  Skilled: 90,
};

export function SkillLine({ language, proficiency }) {
  const position = proficiencyMap[proficiency];

  return (
    <div style={{ marginBottom: "16px", width: "200px" }}>
      <div style={{ marginBottom: "4px", fontSize: "14px" }}>
        {language} — {proficiency}
      </div>

      <div
        style={{
          position: "relative",
          height: "6px",
          background: "#ddd",
          borderRadius: "3px",
        }}
      >
        {/* Animated dot */}
        <motion.div
          initial={{ left: 0 }}
          animate={{ left: `${position}%` }}
          transition={{ type: "spring", stiffness: 100 }}
          style={{
            position: "absolute",
            top: "-4px",
            width: "14px",
            height: "14px",
            borderRadius: "50%",
            background: "#007bff",
            transform: "translateX(-50%)",
          }}
        />
      </div>
    </div>
  );
}

function ProgrammingSkills() {
  let skills: ProgrammingSkill[] = [
    { language: "Java", proficiency: "Intermediate" },
    { language: "C", proficiency: "Beginner" },
    { language: "C++", proficiency: "Intermediate" },
    { language: "Python", proficiency: "Skilled" },
    { language: "JavaScript", proficiency: "Skilled" },
    { language: "TypeScript", proficiency: "Intermediate" },
  ];
  return (
    <div>
      {skills.map((skill) => (
        <SkillLine
          key={skill.language}
          language={skill.language}
          proficiency={skill.proficiency}
        />
      ))}
    </div>
  );
}

function GeneralSkills() {
  let skills = [
    "Agile",
    "Test Automation",
    "Quality Assurance",
    "Mobile Test Automation",
    "Performance Testing",
    "Github Actions",
  ];
  return (
    <ul>
      {skills.map((skill) => (
        <li>{skill}</li>
      ))}
    </ul>
  );
}

interface Project {
  name: string;
  url: string;
  description?: string;
}

function Projects() {
  let projectList: Project[] = [
    { name: "Pheme", url: "https://github.com/mfk99/Pheme" },
    { name: "msc-thesis", url: "https://github.com/mfk99/msc-thesis-code" },
    {
      name: "TextAdventure",
      url: "https://github.com/AnttiVainikka/TextAdventure",
    },
    {
      name: "DistributedProject",
      url: "https://github.com/AnttiVainikka/DistributedProject",
    },
    {
      name: "Mobvita",
      url: "https://github.com/UniversityOfHelsinkiCS/mobvita",
    },
  ];
  return (
    <ul>
      {projectList.map((project) => (
        <li>
          <a href={project.url} target="_blank">
            {project.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
