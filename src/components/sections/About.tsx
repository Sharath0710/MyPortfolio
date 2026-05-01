import { motion } from "framer-motion";
import { BadgeCheck, MapPin, Zap } from "lucide-react";
import { aboutHighlights, profile } from "../../data/portfolio";
import { certifications } from "../../data/skills";
import { staggerContainer } from "../../lib/animations/motionVariants";
import { HologramPanel } from "../ui/HologramPanel";
import { Section } from "../ui/Section";
import { WhatIDo } from "./WhatIDo";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="XR systems with practical simulation depth."
      intro="The portfolio should present Sharath as a hands-on Unity developer who understands the small details that make VR interactions feel believable: constraints, resistance, feedback, stability, and runtime performance."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]"
      >
        <HologramPanel accent="#38d9ff" className="lg:sticky lg:top-28 lg:self-start">
          <div className="flex items-center gap-3 text-sm text-slate-400">
            <MapPin className="h-4 w-4 text-cyanSignal" aria-hidden="true" />
            {profile.location}
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-white">{profile.currentFocus}</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">{profile.summary}</p>

          <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.035] p-4">
            <div className="flex items-center gap-2 text-sm font-medium text-amberSignal">
              <Zap className="h-4 w-4" aria-hidden="true" />
              Portfolio direction
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-400">
              A premium XR workstation interface: 3D atmosphere behind readable content, modular
              data rendering, and expandable placeholders for project videos and a future character.
            </p>
          </div>
        </HologramPanel>

        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-3">
            {aboutHighlights.map((highlight) => (
              <HologramPanel key={highlight.title} accent="#6ee7b7">
                <h3 className="text-lg font-semibold text-white">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{highlight.body}</p>
              </HologramPanel>
            ))}
          </div>

          <WhatIDo />

          <HologramPanel accent="#f6c85f">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-amberSignal">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Certifications
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {certifications.map((certificate) => (
                <div
                  key={certificate}
                  className="rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 text-sm leading-6 text-slate-300"
                >
                  {certificate}
                </div>
              ))}
            </div>
          </HologramPanel>
        </div>
      </motion.div>
    </Section>
  );
}

