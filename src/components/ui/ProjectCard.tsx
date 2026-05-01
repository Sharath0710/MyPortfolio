import { ArrowUpRight, BadgeCheck } from "lucide-react";
import type { CSSProperties } from "react";
import type { Project } from "../../data/projects";
import { HologramPanel } from "./HologramPanel";
import { VideoPlaceholder } from "./VideoPlaceholder";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <HologramPanel
      accent={project.accent}
      className={`group flex h-full flex-col ${featured ? "lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-6" : ""}`}
    >
      <div
        className="aspect-video overflow-hidden rounded-md"
        style={{ boxShadow: `0 0 44px ${project.accent}1f` } as CSSProperties}
      >
        <VideoPlaceholder
          title={project.title}
          src={project.demoVideo}
          status={project.mediaStatus}
          accent={project.accent}
        />
      </div>

      <div className="mt-5 flex flex-1 flex-col lg:mt-0">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              {project.category}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{project.title}</h3>
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-amberSignal/30 bg-amberSignal/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-amberSignal">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {project.ownership}
            </div>
          </div>
          {project.repository ? (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:border-cyanSignal/60 hover:text-cyanSignal"
              aria-label={`Open ${project.title} repository`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-300">{project.description}</p>
        <p className="mt-3 text-sm leading-7 text-slate-400">{project.impact}</p>

        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3">
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </HologramPanel>
  );
}
