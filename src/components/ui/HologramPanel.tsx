import { motion } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";
import { panelReveal } from "../../lib/animations/motionVariants";

type HologramPanelProps = {
  children: ReactNode;
  accent?: string;
  className?: string;
};

export function HologramPanel({
  children,
  accent = "#14f1ff",
  className = "",
}: HologramPanelProps) {
  return (
    <motion.div
      variants={panelReveal}
      style={{ "--panel-accent": accent } as CSSProperties}
      className={`holo-surface relative overflow-hidden rounded-md p-5 shadow-holo ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--panel-accent),transparent)]" />
      <div className="pointer-events-none absolute right-4 top-4 h-10 w-10 border-r border-t border-[var(--panel-accent)] opacity-[0.45]" />
      <div className="pointer-events-none absolute bottom-4 left-4 h-10 w-10 border-b border-l border-[var(--panel-accent)] opacity-30" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,transparent,rgba(255,255,255,0.045)_48%,transparent_52%)] opacity-60" />
      {children}
    </motion.div>
  );
}

