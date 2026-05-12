import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { type FormEvent, useState } from "react";
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

type FormStatus = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Message could not be sent.");
      }

      form.reset();
      setFormStatus("sent");
      setStatusMessage("Message sent. I will get back to you soon.");
    } catch (error) {
      setFormStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Message could not be sent.");
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      chapter="05"
      title="Let's build the next XR simulation."
      intro="Send a note for Unity roles, collaboration, or project walkthroughs."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.22 }}
        className="grid gap-5 lg:grid-cols-[1fr_0.82fr]"
      >
        <HologramPanel accent="#fb7185" className="min-h-[420px]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-roseSignal">
              Write a message
            </p>
            <h3 className="mt-4 max-w-2xl text-3xl font-semibold text-white">
              Tell me what you are building.
            </h3>
          </div>

          <form
            className="mt-7 grid gap-4"
            onSubmit={handleSubmit}
          >
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Name
              <input
                required
                name="name"
                type="text"
                className={`rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-roseSignal ${focusRing}`}
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Email
              <input
                required
                name="email"
                type="email"
                className={`rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-roseSignal ${focusRing}`}
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-200">
              Message
              <textarea
                required
                name="message"
                rows={6}
                className={`resize-none rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-roseSignal ${focusRing}`}
                placeholder="Project, role, or collaboration details"
              />
            </label>
            {statusMessage ? (
              <p
                className={`text-sm ${
                  formStatus === "sent" ? "text-mintSignal" : "text-roseSignal"
                }`}
                role="status"
              >
                {statusMessage}
              </p>
            ) : null}
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className={`mt-2 inline-flex w-fit items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-deep transition hover:bg-cyanSignal disabled:cursor-not-allowed disabled:opacity-60 ${focusRing}`}
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
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
