export type SkillGroup = {
  title: string;
  summary: string;
  skills: string[];
  accent: string;
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core",
    summary: "Unity-first development for games, simulations, and real-time interaction systems.",
    skills: ["Unity3D", "C#", "Game Mechanics", "OOP", "Gameplay Systems", "UI Systems"],
    accent: "#38d9ff",
  },
  {
    title: "XR & Devices",
    summary: "VR tooling and platform experience for immersive training workflows.",
    skills: [
      "Virtual Reality",
      "XR Interaction Toolkit",
      "UltimateXR",
      "OpenXR Plugin",
      "Oculus Plugin",
      "Meta Quest",
      "HTC Vive",
      "Google ARCore",
      "Unity OpenXR: Android XR",
    ],
    accent: "#6ee7b7",
  },
  {
    title: "Development",
    summary: "Practical engineering habits for robust prototypes and production-facing simulations.",
    skills: [
      "Debugging",
      "Performance Optimization",
      "Rapid Prototyping",
      "Git",
      "GitHub",
      "Perforce Helix Core",
    ],
    accent: "#f6c85f",
  },
  {
    title: "Additional",
    summary: "Backend and web foundations that support tool building and integration work.",
    skills: ["REST API Basics", "JSON", "JavaScript", "Java", "RDBMS", "Spring", "Angular"],
    accent: "#fb7185",
  },
];

export const certifications = [
  "Java Basic Certification - HackerRank",
  "Software Intern Certification - HackerRank",
  "Introduction to Web Development with HTML, CSS, JavaScript - IBM",
  "TCS iON Career Edge - Young Professional",
  "Java Full Stack Development - EduBridge",
];

