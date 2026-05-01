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
  accent = "#38d9ff",
  className = "",
}: HologramPanelProps) {
  return (
    <motion.div
      variants={panelReveal}
      style={{ "--panel-accent": accent } as CSSProperties}
      className={`holo-surface relative overflow-hidden rounded-lg p-5 shadow-holo ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--panel-accent),transparent)]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-[var(--panel-accent)] opacity-10 blur-3xl" />
      {children}
    </motion.div>
  );
}

