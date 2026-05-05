import { motion } from "framer-motion";
import { Cpu, Orbit, RadioTower } from "lucide-react";
import { skillGroups } from "../../data/skills";
import { staggerContainer } from "../../lib/animations/motionVariants";
import { HologramPanel } from "../ui/HologramPanel";
import { Section } from "../ui/Section";

export function TechStack() {
  return (
    <Section
      id="tech"
      eyebrow="Tech Stack"
      chapter="03"
      title="A Unity-centered stack for immersive systems."
      intro="The stack is grouped by the way I work: core Unity engineering, XR devices and plugins, runtime development practices, and integration foundations."
    >
      <div className="grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <HologramPanel accent="#a78bfa" className="min-h-[420px]">
          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-black/20">
            <div className="absolute h-64 w-64 rounded-full border border-cyanSignal/25 orbital-ring" />
            <div className="absolute h-44 w-44 rounded-full border border-amberSignal/25 orbital-ring-slow" />
            <div className="absolute h-80 w-80 rounded-full border border-mintSignal/10" />

            <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-cyanSignal/40 bg-cyanSignal/10 text-cyanSignal shadow-holo">
              <Cpu className="h-10 w-10" aria-hidden="true" />
            </div>

            <div className="absolute left-8 top-8 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              Unity
            </div>
            <div className="absolute right-7 top-24 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              OpenXR
            </div>
            <div className="absolute bottom-14 left-12 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              UltimateXR
            </div>
            <div className="absolute bottom-8 right-10 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
              C#
            </div>
            <Orbit className="absolute left-1/2 top-12 h-5 w-5 -translate-x-1/2 text-amberSignal" aria-hidden="true" />
            <RadioTower className="absolute bottom-24 right-1/2 h-5 w-5 translate-x-1/2 text-mintSignal" aria-hidden="true" />
          </div>
        </HologramPanel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {skillGroups.map((group) => (
            <HologramPanel key={group.title} accent={group.accent}>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{group.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </HologramPanel>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
