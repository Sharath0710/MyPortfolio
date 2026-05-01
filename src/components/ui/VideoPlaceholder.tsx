import { Play } from "lucide-react";

type VideoPlaceholderProps = {
  title: string;
  src?: string;
};

export function VideoPlaceholder({ title, src }: VideoPlaceholderProps) {
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

  return (
    <div className="relative flex h-full min-h-48 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black/35">
      <div className="absolute inset-0 grid-mask opacity-30" />
      <div className="scanline absolute inset-x-0 h-16" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyanSignal/40 bg-cyanSignal/10 text-cyanSignal shadow-holo">
        <Play className="h-6 w-6 fill-current" aria-hidden="true" />
      </div>
      <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">
        Demo video slot
      </span>
    </div>
  );
}

