export type PositionedEvent = {
  id: string;
  title: string;
  date: string;
  description?: string;
  lane: number;
  parent?: string;
  type?: "occupation" | "educational";
  side: "left" | "right";
  x: number;
  y: number;
  yOffset?: number;
  eventCardSize?: number;
};

export const events: PositionedEvent[] = [
  {
    id: "bsc",
    title: "Beginning of BSc Studies",
    date: "1.9.2019",
    lane: 0,
    type: "educational",
    side: "left",
    x: 0,
    y: 0,
    yOffset: -60,
    eventCardSize: 180,
    description:
      "The beginning of my Computer science studies in the University of Helsinki.",
  },
  {
    id: "ohtu",
    title: "Mobvita",
    date: "5.5.2023",
    lane: 0,
    parent: "bsc",
    side: "right",
    x: 0,
    y: 0,
    yOffset: -60,
    eventCardSize: 180,
    description:
      'Worked on gamifying the Mobvita user experience as a part of the "Software Engineering Project"-course.',
  },
  {
    id: "bsc-thesis",
    title: "BSc Graduation",
    date: "28.6.2023",
    lane: 0,
    parent: "ohtu",
    side: "left",
    x: 0,
    y: 0,
    yOffset: -100,
    eventCardSize: 180,
    description:
      'Completed my Bachelor\'s thesis: "Modelling Randomness via Markov Chains" and graduated as a Bachelor of Science.',
  },
  {
    id: "msc",
    title: "Beginning of MSc Studies",
    date: "1.9.2023",
    lane: 0,
    parent: "bsc-thesis",
    side: "left",
    x: 0,
    y: 0,
    yOffset: -20,
    eventCardSize: 180,
    description:
      "Continued my Computer Science studies into the Master's programme, choosing the Algorithms-track.",
  },
  {
    id: "visma",
    title: "Visma Solutions Traineeship",
    date: "13.5.2024",
    lane: 1,
    parent: "msc",
    side: "right",
    x: 0,
    y: 0,
    yOffset: -170,
    description: `Began working in Visma Solutions as a Quality Assurance Engineer Trainee. During traineeship,
      a fellow trainee and I created a mobile TAS (Test Automation System), which was the first TAS in the company.`,
  },
  {
    id: "visma-cntd",
    title: "Continuing part-time",
    date: "1.9.2024",
    lane: 1,
    parent: "visma",
    side: "right",
    x: 0,
    y: 0,
    yOffset: -30,
    eventCardSize: 140,
    description: `Continued working in Visma Solutions part-time alongside my studies.`,
  },
  {
    id: "instructor",
    title: "Instructing",
    date: "Q4 2025",
    lane: 0,
    parent: "msc",
    side: "left",
    x: 0,
    y: 0,
    yOffset: -170,
    eventCardSize: 180,
    description: `Instructed two programming courses. 
    The experience was very valuable, improving my understanding of fundamental programming concepts as well as communication skills.`,
  },
  {
    id: "junior",
    title: "Promotion to Junior",
    date: "1.6.2025",
    lane: 1,
    parent: "visma-cntd",
    side: "right",
    x: 0,
    y: 0,
    yOffset: -80,
    eventCardSize: 180,
    description: `After a year of valuable work experience, I was promoted to Junior QA Engineer.`,
  },

  {
    id: "msc-thesis",
    title: "MSc Graduation",
    date: "Q4 2026",
    lane: 0,
    parent: "instructor",
    side: "left",
    x: 0,
    y: 0,
    yOffset: -190,
    description: `I will graduate from University of Helsinki, 
    having completed the Master of Science programme in Computer Science.
    Completing the Master's Thesis involved a practical implementation and academic writing, 
    the topic being "Scheduling as an Incremental Optiomization Benchmark".`,
  },
];
