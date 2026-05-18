import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, PanelsTopLeft, Sparkles } from "lucide-react";
import { heroSignals, heroStats, profile } from "../../data/portfolio";
import { fadeUp, staggerContainer } from "../../lib/animations/motionVariants";
import { containerWidth, focusRing, sectionPadding } from "../styles/tokens";

export function Landing() {
  return (
    <section id="landing" className={`relative flex min-h-screen items-center ${sectionPadding}`}>
      <div className={`${containerWidth} grid items-center gap-10 pt-16 lg:grid-cols-[0.98fr_0.72fr]`}>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="hero-copy max-w-4xl"
        >
          <motion.p
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-md border border-cyanSignal/25 bg-cyanSignal/10 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cyanSignal sm:text-sm sm:tracking-[0.24em]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-mintSignal" />
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

          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap gap-2">
            {heroSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-300"
              >
                {signal}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className={`inline-flex items-center gap-2 rounded-md bg-cyanSignal px-5 py-3 text-sm font-semibold text-deep shadow-holo transition hover:bg-white ${focusRing}`}
            >
              <PanelsTopLeft className="h-4 w-4" aria-hidden="true" />
              View Work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={`inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-roseSignal/70 hover:text-roseSignal ${focusRing}`}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Contact
            </a>
            <a
              href={profile.resumeHref}
              download
              className={`inline-flex items-center gap-2 rounded-md border border-mintSignal/40 bg-mintSignal/10 px-5 py-3 text-sm font-semibold text-mintSignal transition hover:border-white/70 hover:bg-white hover:text-deep ${focusRing}`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
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

        <motion.aside
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="holo-surface relative hidden min-h-[560px] overflow-hidden rounded-md p-5 shadow-holo lg:block"
        >
          <div className="absolute inset-0 xr-scan-grid opacity-[0.35]" />
          <div className="absolute right-0 top-8 h-40 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,92,168,0.16))]" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-deep to-transparent" />
          <div className="relative z-10 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-400">
            <span>XR Deck / S.D</span>
            <span className="text-roseSignal">Live</span>
          </div>
          <div className="relative z-10 mt-6 overflow-hidden rounded-md border border-white/10 bg-black/30">
            <img
              src="/images/sharath-avatar-reference.jpeg"
              alt="Sharath portrait reference for the portfolio avatar"
              className="h-[420px] w-full object-cover object-[52%_35%] opacity-85 saturate-[0.92]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
            <div className="absolute inset-4 border border-cyanSignal/25" />
            <div className="absolute left-4 top-4 h-12 w-12 border-l border-t border-mintSignal/70" />
            <div className="absolute bottom-4 right-4 h-12 w-12 border-b border-r border-roseSignal/70" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-mintSignal">
                Spatial Computing Interface
              </p>
              <h2 className="mt-2 text-4xl font-black uppercase leading-[0.9] tracking-normal text-white">
                XR Systems
                <span className="block text-cyanSignal">from scratch</span>
              </h2>
            </div>
          </div>
          <div className="relative z-10 mt-5 grid items-end gap-4 border-t border-white/10 pt-4 sm:grid-cols-[0.95fr_0.72fr]">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Sparkles className="h-4 w-4 text-roseSignal" aria-hidden="true" />
                Immersive Signal
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">
                Unity systems / Training simulation / VR mechanics
              </p>
              <p className="mt-4 font-mono text-4xl text-white">01</p>
            </div>
            <a
              href={profile.resumeHref}
              download
              className={`inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-deep transition hover:bg-mintSignal ${focusRing}`}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </motion.aside>
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
