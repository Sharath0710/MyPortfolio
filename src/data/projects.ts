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
    mediaStatus: "planned",
    tech: ["Unity", "C#", "VR", "ScriptableObjects", "World-space UI"],
    highlights: [
      "Implemented proximity-based atom bonding.",
      "Used ScriptableObjects for molecule validation data.",
      "Built reset, info, and interaction systems for XR use.",
    ],
    repository: "https://github.com/Sharath0710/VR-Molecular-Chemistry-Lab-Demo",
    accent: "#38d9ff",
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
    mediaStatus: "private",
    tech: ["Unity", "C#", "UltimateXR", "VR Mechanics"],
    highlights: [
      "Implemented torque-based wrench behavior.",
      "Added directional constraints and progressive resistance.",
      "Built constrained slide-out and snapping behavior.",
    ],
    accent: "#f6c85f",
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
    accent: "#6ee7b7",
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
    accent: "#fb7185",
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
    mediaStatus: "planned",
    tech: ["Unity", "C#", "Physics", "Gameplay"],
    highlights: [
      "Built movement, collision, and completion logic.",
      "Structured scripts for maintainability.",
      "Practiced gameplay debugging and balancing.",
    ],
    repository: "https://github.com/Sharath0710/Crazy-Cube",
    accent: "#a78bfa",
  },
  {
    id: "patient-health-monitoring",
    title: "Patient Health Monitoring System",
    category: "Award-winning Engineering Project",
    description:
      "An IoT-oriented healthcare monitoring concept focused on reducing cloud-delay issues in critical health data workflows.",
    impact:
      "Won Best Project Award, 1st Place, among 30+ projects at ACS College of Engineering.",
    ownership: "Award-winning academic build",
    mediaStatus: "case-study",
    tech: ["IoT", "Sensors", "Real-time Data", "Embedded Workflows"],
    highlights: [
      "Highlighted latency risks in cloud-heavy health monitoring.",
      "Explored real-time data handling between hardware and software.",
      "Recognized by the Computer Science and Engineering department.",
    ],
    accent: "#22c55e",
  },
];

export const workNotes = [
  {
    value: "Solo",
    label: "Most XR modules built independently from blank Unity scenes.",
  },
  {
    value: "Private",
    label: "Some professional demos are not public, so cards support private walkthrough states.",
  },
  {
    value: "More+",
    label: "The catalog is ready for additional projects beyond the resume once names/media are added.",
  },
];
