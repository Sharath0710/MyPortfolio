import { motion } from "framer-motion";
import { Cpu, Gamepad2, Gauge, Orbit, Radar, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";
import { skillGroups } from "../../data/skills";
import { staggerContainer } from "../../lib/animations/motionVariants";
import { HologramPanel } from "../ui/HologramPanel";
import { Section } from "../ui/Section";

const nodePositions = [
  "left-[6%] top-[20%]",
  "right-[6%] top-[25%]",
  "bottom-[22%] left-[9%]",
  "bottom-[16%] right-[8%]",
];

const nodeIcons = [Cpu, Orbit, Gauge, Gamepad2];

export function TechStack() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [signal, setSignal] = useState(34);
  const activeGroup = skillGroups[activeIndex];
  const ActiveIcon = nodeIcons[activeIndex % nodeIcons.length];

  const signalBars = useMemo(
    () => activeGroup.skills.slice(0, 6).map((skill, index) => ({
      skill,
      width: `${Math.min(92, 34 + index * 9 + activeIndex * 4)}%`,
    })),
    [activeGroup.skills, activeIndex],
  );

  const activateNode = (index: number) => {
    setActiveIndex(index);
    setSignal((current) => (index === activeIndex ? Math.min(99, current + 3) : Math.min(99, current + 11)));
  };

  const scanNext = () => {
    const nextIndex = (activeIndex + 1) % skillGroups.length;

    activateNode(nextIndex);
  };

  const resetScan = () => {
    setActiveIndex(0);
    setSignal(34);
  };

  return (
    <Section
      id="tech"
      eyebrow="Tech Stack"
      chapter="03"
      title="A Unity-centered stack for immersive systems."
      intro="The stack is grouped by the way I work: core Unity engineering, XR devices and plugins, runtime development practices, and integration foundations."
    >
      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <HologramPanel accent="#b86bff" className="min-h-[560px]">
          <div className="relative min-h-[510px] overflow-hidden rounded-md border border-white/10 bg-black/25 p-5">
            <div className="absolute inset-0 xr-scan-grid opacity-[0.24]" />
            <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyanSignal/20 orbital-ring" />
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-roseSignal/25 orbital-ring-slow" />
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-mintSignal/10" />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-cyanSignal">
                <Radar className="h-4 w-4" aria-hidden="true" />
                Interactive Stack Scanner
              </div>
              <div className="rounded-md border border-mintSignal/25 bg-mintSignal/10 px-3 py-2 font-mono text-sm text-mintSignal">
                {signal}% signal
              </div>
            </div>

            {skillGroups.map((group, index) => {
              const Icon = nodeIcons[index % nodeIcons.length];
              const isActive = activeIndex === index;

              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => activateNode(index)}
                  onPointerEnter={() => setActiveIndex(index)}
                  className={`absolute z-20 flex min-w-32 items-center gap-2 rounded-md border px-3 py-2 text-left text-sm font-semibold shadow-holo backdrop-blur-md transition duration-300 hover:scale-105 ${nodePositions[index]}`}
                  style={{
                    borderColor: `${group.accent}66`,
                    backgroundColor: isActive ? group.accent : "rgba(255, 255, 255, 0.075)",
                    color: isActive ? "#03040b" : group.accent,
                  }}
                  aria-pressed={isActive}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {group.title}
                </button>
              );
            })}

            <div className="absolute left-1/2 top-1/2 z-10 flex w-[min(76%,22rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md border border-white/10 bg-deep/78 p-5 text-center shadow-holo backdrop-blur-xl">
              <div
                className="flex h-20 w-20 items-center justify-center rounded-md border bg-white/5 shadow-holo"
                style={{ borderColor: `${activeGroup.accent}66`, color: activeGroup.accent }}
              >
                <ActiveIcon className="h-9 w-9" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{activeGroup.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">{activeGroup.summary}</p>

              <div className="mt-5 flex flex-wrap justify-center gap-2">
                {activeGroup.skills.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                <button
                  type="button"
                  onClick={scanNext}
                  className="inline-flex items-center gap-2 rounded-md bg-cyanSignal px-4 py-2 text-sm font-semibold text-deep transition hover:bg-white"
                >
                  <Radar className="h-4 w-4" aria-hidden="true" />
                  Scan Node
                </button>
                <button
                  type="button"
                  onClick={resetScan}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-slate-200 transition hover:border-white/40 hover:text-white"
                  aria-label="Reset tech stack scanner"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </HologramPanel>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-4"
        >
          <HologramPanel accent={activeGroup.accent}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-cyanSignal">
                  Active Node
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">{activeGroup.title}</h3>
              </div>
              <div
                className="rounded-md border px-3 py-2 font-mono text-sm"
                style={{ borderColor: `${activeGroup.accent}66`, color: activeGroup.accent }}
              >
                {activeGroup.skills.length} modules
              </div>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">{activeGroup.summary}</p>

            <div className="mt-6 space-y-3">
              {signalBars.map((bar) => (
                <div key={bar.skill}>
                  <div className="mb-1 flex items-center justify-between gap-3 text-xs text-slate-400">
                    <span>{bar.skill}</span>
                    <span>ready</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: bar.width, backgroundColor: activeGroup.accent }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </HologramPanel>

          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => activateNode(index)}
                  className={`holo-surface rounded-md p-4 text-left transition duration-300 ${
                    isActive ? "scale-[1.02] border-cyanSignal/50" : "hover:border-white/25"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: group.accent, boxShadow: `0 0 18px ${group.accent}` }}
                    />
                  </div>
                  <p className="text-sm leading-6 text-slate-400">{group.summary}</p>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
