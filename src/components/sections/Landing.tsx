import { motion } from "framer-motion";
import { ArrowDown, Mail, PanelsTopLeft } from "lucide-react";
import { heroStats, profile } from "../../data/portfolio";
import { fadeUp, staggerContainer } from "../../lib/animations/motionVariants";
import { containerWidth, focusRing, sectionPadding } from "../styles/tokens";

export function Landing() {
  return (
    <section id="landing" className={`relative flex min-h-screen items-center ${sectionPadding}`}>
      <div className={containerWidth}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="hero-copy max-w-4xl pt-24"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-medium uppercase tracking-[0.18em] text-cyanSignal sm:text-sm sm:tracking-[0.3em]"
          >
            {profile.role}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-7xl lg:text-8xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-2xl text-xl leading-9 text-slate-200 sm:text-2xl"
          >
            {profile.headline}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            {profile.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className={`inline-flex items-center gap-2 rounded-md bg-cyanSignal px-5 py-3 text-sm font-semibold text-deep transition hover:bg-white ${focusRing}`}
            >
              <PanelsTopLeft className="h-4 w-4" aria-hidden="true" />
              View Work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-amberSignal/70 hover:text-amberSignal ${focusRing}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="holo-surface rounded-lg p-4">
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        className={`absolute bottom-8 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-300 backdrop-blur transition hover:text-white ${focusRing}`}
      >
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
        Explore
      </a>
    </section>
  );
}
