import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { SectionId } from "../../data/portfolio";
import { fadeUp } from "../../lib/animations/motionVariants";
import { containerWidth, sectionPadding } from "../styles/tokens";

type SectionProps = {
  id: SectionId;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`relative min-h-screen ${sectionPadding} ${className}`}>
      <div className={containerWidth}>
        <motion.header
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyanSignal">
            {eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            {title}
          </h2>
          {intro ? <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">{intro}</p> : null}
        </motion.header>
        {children}
      </div>
    </section>
  );
}

