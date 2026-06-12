export function GeneralSkills() {
  let skills = [
    "Agile",
    "Test Automation",
    "Quality Assurance",
    "Mobile Test Automation",
    "Performance Testing",
    "Github Actions",
  ];
  return (
    <>
      <h2 style={{ color: "#fff", textAlign: "left" }}>Skills</h2>
      <ul style={{ textAlign: "left" }}>
        {skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </>
  );
}
