import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { profile, socialLinks } from "../../data/portfolio";
import { fadeUp, staggerContainer } from "../../lib/animations/motionVariants";
import { focusRing } from "../styles/tokens";
import { HologramPanel } from "../ui/HologramPanel";
import { Section } from "../ui/Section";

const iconMap = {
  linkedin: Linkedin,
  github: Github,
  external: ExternalLink,
};

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      chapter="05"
      title="Ready for XR projects, Unity roles, and immersive prototypes."
      intro="A focused closing section with direct channels for hiring conversations, collaboration, and project walkthroughs."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        className="grid gap-5 lg:grid-cols-[1fr_0.82fr]"
      >
        <HologramPanel accent="#fb7185" className="flex min-h-[360px] flex-col justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-roseSignal">
              Build the next simulation
            </p>
            <h3 className="mt-4 max-w-2xl text-4xl font-semibold text-white">
              Let the portfolio feel like the work: precise, immersive, and easy to explore.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
              This codebase is ready for demo videos, richer project case studies, and a custom
              3D character model when final assets are available.
            </p>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className={`mt-10 inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-deep transition hover:bg-cyanSignal ${focusRing}`}
          >
            <Send className="h-4 w-4" aria-hidden="true" />
            Send Email
          </a>
        </HologramPanel>

        <div className="space-y-5">
          <HologramPanel accent="#38d9ff">
            <div className="space-y-4 text-sm text-slate-300">
              <a
                href={`mailto:${profile.email}`}
                className={`flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-cyanSignal/50 hover:text-white ${focusRing}`}
              >
                <Mail className="h-4 w-4 text-cyanSignal" aria-hidden="true" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className={`flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3 transition hover:border-cyanSignal/50 hover:text-white ${focusRing}`}
              >
                <Phone className="h-4 w-4 text-amberSignal" aria-hidden="true" />
                {profile.phone}
              </a>
              <div className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] px-4 py-3">
                <MapPin className="h-4 w-4 text-mintSignal" aria-hidden="true" />
                {profile.location}
              </div>
            </div>
          </HologramPanel>

          <motion.div variants={fadeUp} className="grid gap-3 sm:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.kind as keyof typeof iconMap] ?? ExternalLink;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`holo-surface flex min-h-28 flex-col justify-between rounded-lg p-4 text-slate-200 transition hover:border-cyanSignal/60 hover:text-cyanSignal ${focusRing}`}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
}
