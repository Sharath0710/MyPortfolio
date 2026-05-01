import { Code2, Gamepad2, Gauge, Orbit } from "lucide-react";
import { HologramPanel } from "../ui/HologramPanel";

const services = [
  {
    title: "VR Training Systems",
    body: "Procedure-focused simulations for aircraft and industrial training scenarios.",
    icon: Orbit,
    accent: "#38d9ff",
  },
  {
    title: "Mechanical Interactions",
    body: "Torque, snapping, constrained motion, ratcheting, resistance, and feedback systems.",
    icon: Gauge,
    accent: "#f6c85f",
  },
  {
    title: "Unity Gameplay Logic",
    body: "Movement, collision, progression, modular scripts, and rapid interactive prototypes.",
    icon: Gamepad2,
    accent: "#6ee7b7",
  },
  {
    title: "Runtime Reliability",
    body: "Debugging, optimization, and clean architecture for stable XR experiences.",
    icon: Code2,
    accent: "#fb7185",
  },
];

export function WhatIDo() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {services.map((service) => {
        const Icon = service.icon;

        return (
          <HologramPanel key={service.title} accent={service.accent}>
            <div
              className="mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5"
              style={{ color: service.accent }}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-400">{service.body}</p>
          </HologramPanel>
        );
      })}
    </div>
  );
}

