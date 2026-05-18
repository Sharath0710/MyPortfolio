import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import type { SectionId } from "../../data/portfolio";
import { fadeUp } from "../../lib/animations/motionVariants";
import { containerWidth, sectionPadding } from "../styles/tokens";

type SectionProps = {
  id: SectionId;
  eyebrow: string;
  chapter?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, intro, children, className = "" }: SectionProps) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 86%", "end 16%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.16, 0.84, 1], [0.28, 1, 1, 0.42]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [72, 0, 0, -34]);
  const scale = useTransform(scrollYProgress, [0, 0.18, 0.82, 1], [0.965, 1, 1, 0.985]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={prefersReducedMotion ? undefined : { opacity, y, scale }}
      className={`section-depth relative min-h-screen scroll-mt-28 ${sectionPadding} ${className}`}
    >
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
    </motion.section>
  );
}
