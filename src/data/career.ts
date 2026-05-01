export type TimelineItem = {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export const careerItems: TimelineItem[] = [
  {
    id: "epicx-studios",
    title: "Unity Developer / XR Developer",
    organization: "Epicx Studios Pvt Ltd",
    period: "May 2024 - Present",
    location: "Bengaluru, India",
    description:
      "Developing real-time 3D interactive systems and VR training simulations using Unity and C#.",
    bullets: [
      "Designed constrained rotations, physics behavior, and user feedback systems.",
      "Optimized runtime performance for smooth VR device experiences.",
      "Debugged interaction and system-level issues in production environments.",
    ],
    tags: ["Unity", "C#", "VR", "Performance", "Simulation"],
  },
  {
    id: "edubridge",
    title: "Java Trainee",
    organization: "EduBridge Learning Pvt Ltd",
    period: "February 2024 - July 2024",
    location: "Bengaluru, India",
    description:
      "Built foundations in Java, object-oriented programming, backend development, and full-stack application workflows.",
    bullets: [
      "Developed Java and OOP fundamentals.",
      "Built a full-stack application using Spring and Angular.",
      "Practiced backend concepts and application structure.",
    ],
    tags: ["Java", "Spring", "Angular", "OOP"],
  },
  {
    id: "enthu-technology",
    title: "Internship Trainee",
    organization: "Enthu Technology Solutions India Pvt Ltd",
    period: "September 2022 - October 2022",
    location: "Bengaluru, India",
    description:
      "Worked on IoT-based systems involving sensor data collection, device communication, debugging, and testing.",
    bullets: [
      "Explored real-time hardware-software interaction.",
      "Assisted with embedded workflow debugging.",
      "Worked with sensor data collection and device communication.",
    ],
    tags: ["IoT", "Sensors", "Testing", "Embedded"],
  },
];

export const educationItems: TimelineItem[] = [
  {
    id: "acs-college",
    title: "Bachelor of Engineering",
    organization: "ACS College of Engineering",
    period: "August 2019 - June 2023",
    location: "Bengaluru, India",
    description: "Secured 6.83 CGPA and won Best Project Award for Patient Health Monitoring System.",
    bullets: ["Computer Science and Engineering project recognition among 30+ projects."],
    tags: ["Engineering", "Best Project Award", "IoT"],
  },
  {
    id: "seshadripuram",
    title: "Intermediate",
    organization: "Seshadripuram Independent PU College",
    period: "August 2016 - March 2018",
    location: "Bengaluru, India",
    description: "Secured 69 percent.",
    bullets: ["Pre-university education."],
    tags: ["PUC"],
  },
  {
    id: "thyagaraju",
    title: "SSLC",
    organization: "Thyagaraju Central School",
    period: "August 2015 - March 2016",
    location: "Bengaluru, India",
    description: "Secured 8.4 CGPA.",
    bullets: ["Secondary school education."],
    tags: ["SSLC"],
  },
];

