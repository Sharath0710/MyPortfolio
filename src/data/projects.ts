export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  impact: string;
  ownership: string;
  mediaStatus: "available" | "private" | "planned" | "case-study";
  tech: string[];
  highlights: string[];
  repository?: string;
  demoVideo?: string;
  previewStart?: number;
  previewEnd?: number;
  reelNote?: string;
  chapters?: { label: string; time: number }[];
  accent: string;
};

export const projects: Project[] = [
  {
    id: "vr-molecular-chemistry-lab",
    title: "VR Molecular Chemistry Lab",
    category: "Unity Demo XR Project",
    description:
      "A VR simulation for interactive atom manipulation, molecule formation, and world-space learning feedback.",
    impact:
      "Delivered as a rapid XR technical assessment with stable physics, molecule validation, and interaction reset flows.",
    ownership: "Solo build from scratch",
    mediaStatus: "available",
    tech: ["Unity", "C#", "VR", "ScriptableObjects", "World-space UI"],
    highlights: [
      "Implemented proximity-based atom bonding.",
      "Used ScriptableObjects for molecule validation data.",
      "Built reset, info, and interaction systems for XR use.",
    ],
    repository: "https://github.com/Sharath0710/VR-Molecular-Chemistry-Lab-Demo",
    demoVideo: "/Videos/VR%20Molecular%20Chemistry%20Lab.mp4",
    previewStart: 7,
    previewEnd: 31,
    reelNote: "Interaction loop",
    chapters: [
      { label: "Atoms", time: 7 },
      { label: "Bonding", time: 18 },
      { label: "Reset", time: 31 },
    ],
    accent: "#14f1ff",
  },
  {
    id: "a320-fuel-pump-interaction",
    title: "A320 Fuel Pump Interaction",
    category: "Unity XR Project",
    description:
      "A precise VR interaction system for fuel pump maintenance procedures using realistic wrench and canister mechanics.",
    impact:
      "Created modular constrained interaction logic for real-world training simulation accuracy.",
    ownership: "Individually handled from scratch",
    mediaStatus: "available",
    tech: ["Unity", "C#", "UltimateXR", "VR Mechanics"],
    highlights: [
      "Implemented torque-based wrench behavior.",
      "Added directional constraints and progressive resistance.",
      "Built constrained slide-out and snapping behavior.",
    ],
    accent: "#f8ff6a",
  },
  {
    id: "a320-nose-jacking",
    title: "A320 Nose Jacking",
    category: "VR Training Simulation",
    description:
      "A real-time aircraft nose jacking procedure simulation with mechanical interactions and feedback loops.",
    impact:
      "Improved training realism with torque wrench behavior, haptics, UI feedback, and audio cues.",
    ownership: "Individually handled from scratch",
    mediaStatus: "private",
    tech: ["Unity", "C#", "UltimateXR", "Meta Quest", "OpenXR"],
    highlights: [
      "Designed torque wrench ratcheting behavior.",
      "Built resistance handling and directional rotation logic.",
      "Optimized runtime behavior for smooth VR interaction.",
    ],
    demoVideo: "/Videos/A320%20Nose%20Jacking.mp4",
    previewStart: 12,
    previewEnd: 38,
    reelNote: "Procedure highlight",
    chapters: [
      { label: "Setup", time: 12 },
      { label: "Torque", time: 24 },
      { label: "Feedback", time: 38 },
    ],
    accent: "#7cffc4",
  },
  {
    id: "a320-preflight-checklist",
    title: "A320 Preflight Checklist",
    category: "VR Procedure System",
    description:
      "An interactive VR checklist flow for aircraft preflight procedures with guided task completion.",
    impact:
      "Improved usability and responsiveness through clear UI interaction flows and optimized step handling.",
    ownership: "Individually handled from scratch",
    mediaStatus: "private",
    tech: ["Unity", "C#", "VR UI", "Interaction Systems"],
    highlights: [
      "Created step-by-step task logic.",
      "Designed readable VR checklist UI flows.",
      "Optimized interaction handling for responsiveness.",
    ],
    accent: "#b86bff",
  },
  {
    id: "crazy-cube",
    title: "Crazy Cube",
    category: "2D Unity Arcade Game",
    description:
      "A 2D obstacle-based arcade game where players guide a cube to a target while avoiding hazards.",
    impact:
      "Built as a gameplay foundation project covering controls, collision handling, level completion, and balancing.",
    ownership: "Solo gameplay prototype",
    mediaStatus: "available",
    tech: ["Unity", "C#", "Physics", "Gameplay"],
    highlights: [
      "Built movement, collision, and completion logic.",
      "Structured scripts for maintainability.",
      "Practiced gameplay debugging and balancing.",
    ],
    repository: "https://github.com/Sharath0710/Crazy-Cube",
    demoVideo: "/Videos/Crazy%20Cube.mp4",
    previewStart: 3,
    previewEnd: 26,
    reelNote: "Gameplay demo",
    chapters: [
      { label: "Move", time: 3 },
      { label: "Dodge", time: 12 },
      { label: "Goal", time: 22 },
    ],
    accent: "#ff9f1c",
  },
];

export const workNotes = [
  {
    value: "Solo",
    label: "Most XR modules built independently from blank Unity scenes.",
  },
  {
    value: "Private",
    label: "Professional demos can be shown as videos or private walkthrough states.",
  },
  {
    value: "More+",
    label: "The catalog is ready for additional projects beyond the resume once names/media are added.",
  },
];
