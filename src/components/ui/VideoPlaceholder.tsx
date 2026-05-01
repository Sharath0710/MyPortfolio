import { FileText, LockKeyhole, Play, Sparkles } from "lucide-react";
import type { Project } from "../../data/projects";

type VideoPlaceholderProps = {
  title: string;
  src?: string;
  status?: Project["mediaStatus"];
  accent?: string;
};

const mediaState = {
  available: {
    label: "Demo video",
    detail: "Playable walkthrough",
    icon: Play,
  },
  private: {
    label: "Private walkthrough",
    detail: "Demo available on request",
    icon: LockKeyhole,
  },
  planned: {
    label: "Demo not recorded yet",
    detail: "Video slot ready",
    icon: Sparkles,
  },
  "case-study": {
    label: "Case study snapshot",
    detail: "Process and outcome focused",
    icon: FileText,
  },
};

export function VideoPlaceholder({
  title,
  src,
  status = src ? "available" : "planned",
  accent = "#38d9ff",
}: VideoPlaceholderProps) {
  if (src) {
    return (
      <video
        className="h-full w-full rounded-md object-cover"
        src={src}
        controls
        preload="metadata"
        aria-label={`${title} demo video`}
      />
    );
  }

  const state = mediaState[status];
  const Icon = state.icon;

  return (
    <div className="relative flex h-full min-h-48 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black/35">
      <div className="absolute inset-0 grid-mask opacity-30" />
      <div className="scanline absolute inset-x-0 h-16" />
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-full border bg-white/5 shadow-holo"
        style={{ borderColor: `${accent}66`, color: accent }}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
        {state.label}
      </span>
      <span className="absolute right-4 top-4 text-xs uppercase tracking-[0.18em] text-slate-500">
        {state.detail}
      </span>
    </div>
  );
}
