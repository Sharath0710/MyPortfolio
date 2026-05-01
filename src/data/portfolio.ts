import type { ComponentType } from "react";

export type SectionId = "landing" | "about" | "work" | "tech" | "career" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
};

export type SectionDefinition = NavItem & {
  Component: ComponentType;
};

export const navItems: NavItem[] = [
  { id: "landing", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "tech", label: "Stack" },
  { id: "career", label: "Career" },
  { id: "contact", label: "Contact" },
];

export const profile = {
  name: "Sharath D",
  role: "XR Developer / Unity Developer",
  location: "Bengaluru, India",
  email: "sharathaman008@gmail.com",
  phone: "+91 8123399640",
  headline: "Building real-time VR simulations and precise interaction systems.",
  summary:
    "Unity Developer with hands-on experience building real-time 3D interactive applications and VR simulations using Unity and C#. Focused on gameplay systems, constrained mechanical interactions, runtime performance, and reliable XR user feedback.",
  currentFocus: "VR training simulations, interaction mechanics, and scalable Unity prototypes.",
};

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sharath-d710200",
    kind: "linkedin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Sharath0710",
    kind: "github",
  },
  {
    label: "HackerRank",
    href: "https://www.hackerrank.com/profile/sharathaman008",
    kind: "external",
  },
];

export const heroStats = [
  { value: "2+", label: "Years in real-time systems" },
  { value: "5", label: "XR / Unity projects" },
  { value: "VR", label: "Training simulation focus" },
];

export const aboutHighlights = [
  {
    title: "Interaction Accuracy",
    body: "Builds torque, rotation, snapping, proximity, and feedback systems that mirror real-world mechanical behavior.",
  },
  {
    title: "Production Debugging",
    body: "Comfortable tracking complex runtime issues across VR devices, physics systems, and user interaction flows.",
  },
  {
    title: "Rapid Prototyping",
    body: "Turns technical assessments and simulation ideas into modular Unity prototypes under short timelines.",
  },
];

