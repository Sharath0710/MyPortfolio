import type { ComponentType } from "react";

export type SectionId = "landing" | "about" | "work" | "tech" | "career" | "contact";

export type NavItem = {
  id: SectionId;
  label: string;
  chapter: string;
};

export type SectionDefinition = NavItem & {
  Component: ComponentType;
};

export const navItems: NavItem[] = [
  { id: "landing", label: "Home", chapter: "00" },
  { id: "about", label: "About", chapter: "01" },
  { id: "work", label: "Work", chapter: "02" },
  { id: "tech", label: "Stack", chapter: "03" },
  { id: "career", label: "Career", chapter: "04" },
  { id: "contact", label: "Contact", chapter: "05" },
];

export const profile = {
  name: "Sharath D",
  role: "XR Developer / Unity Developer",
  location: "Bengaluru, India",
  email: "sharathaman008@gmail.com",
  phone: "+91 8123399640",
  headline: "Building real-time VR simulations and precise interaction systems.",
  summary:
    "Unity Developer with hands-on experience building real-time 3D interactive applications and VR simulations using Unity and C#. Most project systems are handled independently from scratch, from interaction logic to debugging, polish, and performance.",
  currentFocus: "VR training simulations, interaction mechanics, and scalable Unity prototypes.",
  availability: "Available for XR / Unity roles and immersive prototype work.",
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
  { value: "Solo", label: "From-scratch ownership" },
  { value: "XR", label: "Training simulation focus" },
];

export const heroSignals = [
  "Unity",
  "C#",
  "UltimateXR",
  "OpenXR",
  "Meta Quest",
  "VR UI",
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
  {
    title: "Solo Ownership",
    body: "Comfortable taking XR modules from blank scene setup through interactions, validation, debugging, and delivery.",
  },
];
