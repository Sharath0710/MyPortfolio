import { motion } from "framer-motion";
import { projects, workNotes } from "../../data/projects";
import { staggerContainer } from "../../lib/animations/motionVariants";
import { ProjectCard } from "../ui/ProjectCard";
import { Section } from "../ui/Section";

export function Work() {
  const [featured, ...supporting] = projects;

  return (
    <Section
      id="work"
      eyebrow="XR Project Reels"
      chapter="02"
      title="Short, scannable reels for VR simulations and interaction systems."
      intro="Long walkthroughs are presented as focused XR highlights first, with full demos still available when a recruiter or reviewer wants the complete procedure."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="space-y-5"
      >
        <div className="grid gap-3 md:grid-cols-3">
          {workNotes.map((note) => (
            <div key={note.value} className="holo-surface rounded-lg p-4">
              <p className="text-2xl font-semibold text-amberSignal">{note.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">{note.label}</p>
            </div>
          ))}
        </div>
        <ProjectCard project={featured} featured />
        <div className="grid gap-5 lg:grid-cols-2">
          {supporting.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
