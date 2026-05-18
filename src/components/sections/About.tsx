import { motion } from "framer-motion";
import { Activity, BadgeCheck, Crosshair, MapPin, Radar, Zap } from "lucide-react";
import { aboutHighlights, profile } from "../../data/portfolio";
import { certifications } from "../../data/skills";
import { staggerContainer } from "../../lib/animations/motionVariants";
import { HologramPanel } from "../ui/HologramPanel";
import { Section } from "../ui/Section";
import { WhatIDo } from "./WhatIDo";

const highlightIcons = [Crosshair, Activity, Radar, Zap];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      chapter="01"
      title="XR systems with practical simulation depth."
      intro="Hands-on Unity development for interactions that need to feel physically believable: constraints, resistance, feedback, stability, and runtime performance."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        className="space-y-6"
      >
        <div className="grid gap-5 xl:grid-cols-[0.92fr_1.08fr]">
          <HologramPanel accent="#14f1ff" className="relative min-h-[430px]">
            <div className="absolute inset-5 rounded-md border border-cyanSignal/10" />
            <div className="absolute right-8 top-8 h-28 w-28 rounded-full border border-cyanSignal/20 orbital-ring" />
            <div className="absolute right-14 top-14 h-16 w-16 rounded-full border border-mintSignal/25 orbital-ring-slow" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-md border border-cyanSignal/30 bg-cyanSignal/10 text-cyanSignal">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                {profile.location}
              </div>
              <div className="rounded-md border border-mintSignal/25 bg-mintSignal/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-mintSignal">
                {profile.availability}
              </div>
            </div>

            <div className="relative z-10 mt-12 max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-cyanSignal">
                Operator Profile
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                {profile.currentFocus}
              </h3>
              <p className="mt-5 text-base leading-8 text-slate-300">{profile.summary}</p>
            </div>

            <div className="relative z-10 mt-8 grid gap-3 sm:grid-cols-3">
              {["Unity XR", "VR Mechanics", "Runtime Polish"].map((signal) => (
                <div
                  key={signal}
                  className="rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-slate-200"
                >
                  {signal}
                </div>
              ))}
            </div>

            <div className="relative z-10 mt-6 overflow-hidden rounded-md border border-white/10 bg-black/20 p-4">
              <div className="absolute inset-0 xr-scan-grid opacity-[0.22]" />
              <div className="relative flex items-center gap-2 text-sm font-medium text-amberSignal">
                <Zap className="h-4 w-4" aria-hidden="true" />
                Portfolio direction
              </div>
              <p className="relative mt-3 text-sm leading-7 text-slate-400">
                A premium XR workstation interface: 3D atmosphere behind readable content, modular
                data rendering, and expandable placeholders for project videos and a future character.
              </p>
            </div>
          </HologramPanel>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((highlight, index) => {
              const Icon = highlightIcons[index % highlightIcons.length];

              return (
                <HologramPanel key={highlight.title} accent={index % 2 === 0 ? "#7cffc4" : "#b86bff"}>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5 text-cyanSignal">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{highlight.body}</p>
                </HologramPanel>
              );
            })}
          </div>
        </div>

        <WhatIDo />

        <HologramPanel accent="#f8ff6a">
          <div className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amberSignal">
            <BadgeCheck className="h-4 w-4" aria-hidden="true" />
            Certifications
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map((certificate) => (
              <div
                key={certificate}
                className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-slate-300 transition hover:border-amberSignal/40 hover:bg-amberSignal/10 hover:text-white"
              >
                {certificate}
              </div>
            ))}
          </div>
        </HologramPanel>
      </motion.div>
    </Section>
  );
}
