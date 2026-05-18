import { Briefcase, GraduationCap } from "lucide-react";
import { HologramPanel } from "./HologramPanel";
import type { TimelineItem } from "../../data/career";

type TimelineProps = {
  items: TimelineItem[];
  variant?: "career" | "education";
};

export function Timeline({ items, variant = "career" }: TimelineProps) {
  const Icon = variant === "career" ? Briefcase : GraduationCap;

  return (
    <div className="relative space-y-5">
      <div className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-cyanSignal via-white/20 to-transparent" />
      {items.map((item) => (
        <div key={item.id} className="relative pl-14">
          <div className="absolute left-0 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-cyanSignal/40 bg-deep text-cyanSignal shadow-holo">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </div>
          <HologramPanel accent={variant === "career" ? "#14f1ff" : "#f8ff6a"}>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-400">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-cyanSignal">{item.organization}</p>
              </div>
              <p className="text-sm text-slate-400">{item.location}</p>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>

            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-mintSignal" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </HologramPanel>
        </div>
      ))}
    </div>
  );
}
