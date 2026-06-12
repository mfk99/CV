type Project = {
  name: string;
  url: string;
  description?: string;
};

export function Projects() {
  let projectList: Project[] = [
    {
      name: "Plume",
      url: "https://github.com/mfk99/Plume",
    },

    { name: "msc-thesis", url: "https://github.com/mfk99/msc-thesis-code" },
    {
      name: "TextAdventure",
      url: "https://github.com/AnttiVainikka/TextAdventure",
    },
    {
      name: "DistributedProject",
      url: "https://github.com/AnttiVainikka/DistributedProject",
    },
    { name: "Pheme", url: "https://github.com/mfk99/Pheme" },
    {
      name: "Mobvita",
      url: "https://github.com/UniversityOfHelsinkiCS/mobvita",
    },
  ];
  return (
    <>
      <h2 style={{ color: "#fff", textAlign: "left" }}>Projects</h2>
      <ul style={{ textAlign: "left" }}>
        {projectList.map((project) => (
          <li>
            <a href={project.url} target="_blank">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
