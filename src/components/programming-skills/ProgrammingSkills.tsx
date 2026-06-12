import { motion } from "motion/react";

type ProgrammingSkill = {
  language: string;
  proficiency: "Novice" | "Intermediate" | "Skilled";
};

const proficiencyMap = {
  Novice: 30,
  Intermediate: 50,
  Skilled: 97,
};

function SkillLine({ language, proficiency }: ProgrammingSkill) {
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

export function ProgrammingSkills() {
  const skills: ProgrammingSkill[] = [
    { language: "Java", proficiency: "Intermediate" },
    { language: "C", proficiency: "Novice" },
    { language: "C++", proficiency: "Intermediate" },
    { language: "Python", proficiency: "Skilled" },
    { language: "JavaScript", proficiency: "Skilled" },
    { language: "TypeScript", proficiency: "Intermediate" },
  ];
  return (
    <div style={{ alignContent: "center" }}>
      <h2 style={{ color: "#fff", textAlign: "left" }}>
        Programming Languages
      </h2>
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
