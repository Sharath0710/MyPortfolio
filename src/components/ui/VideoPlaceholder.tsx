import { FileText, LockKeyhole, Maximize2, Play, RotateCcw, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { Project } from "../../data/projects";

type VideoPlaceholderProps = {
  title: string;
  src?: string;
  status?: Project["mediaStatus"];
  accent?: string;
  previewStart?: number;
  previewEnd?: number;
  reelNote?: string;
  chapters?: Project["chapters"];
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
  accent = "#14f1ff",
  previewStart = 0,
  previewEnd,
  reelNote = "XR reel",
  chapters = [],
}: VideoPlaceholderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fullMode, setFullMode] = useState(false);

  const seekTo = useCallback((time: number) => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.currentTime = time;
    void video.play();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || fullMode) {
      return;
    }

    const handleLoadedMetadata = () => {
      const safeStart = Number.isFinite(video.duration)
        ? Math.min(previewStart, Math.max(video.duration - 0.5, 0))
        : previewStart;

      video.currentTime = safeStart;
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    }
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [fullMode, previewStart]);

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || fullMode || previewEnd === undefined) {
      return;
    }

    if (video.currentTime >= previewEnd) {
      video.currentTime = previewStart;
      void video.play();
    }
  };

  const playFullDemo = () => {
    const video = videoRef.current;

    setFullMode(true);

    if (!video) {
      return;
    }

    video.currentTime = 0;
    video.muted = false;
    void video.play();
  };

  if (src) {
    return (
      <div className="xr-video-frame group/video relative h-full min-h-56 overflow-hidden rounded-md border border-white/10 bg-black">
        <video
          ref={videoRef}
          className="h-full w-full object-cover saturate-[1.08] transition duration-700 group-hover/video:scale-[1.015]"
          src={src}
          controls={fullMode}
          autoPlay={!fullMode}
          muted={!fullMode}
          playsInline
          preload="metadata"
          aria-label={`${title} demo video`}
          onTimeUpdate={handleTimeUpdate}
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,7,15,0.05),rgba(4,7,15,0.26)_62%,rgba(4,7,15,0.86))]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.55] mix-blend-screen xr-scan-grid" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--video-accent),transparent)]" style={{ "--video-accent": accent } as CSSProperties} />

        <div className="absolute left-4 top-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/45 px-3 py-2 text-xs font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
          {fullMode ? "Full demo" : reelNote}
        </div>

        {!fullMode ? (
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="max-w-[18rem] text-lg font-semibold leading-tight text-white sm:text-xl">
                {title}
              </p>
              {chapters.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {chapters.map((chapter) => (
                    <button
                      key={`${chapter.label}-${chapter.time}`}
                      type="button"
                      onClick={() => seekTo(chapter.time)}
                      className="rounded-md border border-white/10 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-slate-100 backdrop-blur-md transition hover:border-white/40 hover:bg-white/[0.18]"
                    >
                      {chapter.label}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => seekTo(previewStart)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/10 text-white backdrop-blur-md transition hover:border-white/40 hover:bg-white/20"
                aria-label={`Replay ${title} highlight reel`}
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={playFullDemo}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-deep transition hover:bg-cyanSignal"
              >
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
                Full Demo
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  const state = mediaState[status];
  const Icon = state.icon;

  return (
    <div className="relative flex h-full min-h-48 items-center justify-center overflow-hidden rounded-md border border-white/10 bg-black/45">
      <div className="absolute inset-0 xr-scan-grid opacity-60" />
      <div className="scanline absolute inset-x-0 h-16" />
      <div
        className="relative flex h-16 w-16 items-center justify-center rounded-md border bg-white/5 shadow-holo"
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
