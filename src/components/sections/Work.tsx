import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import { staggerContainer } from "../../lib/animations/motionVariants";
import { ProjectCard } from "../ui/ProjectCard";
import { Section } from "../ui/Section";

export function Work() {
  const [featured, ...supporting] = projects;

  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="VR simulations, interaction prototypes, and Unity systems."
      intro="Each project panel is data-driven and already includes a demo video slot, so final recordings can be added without touching the UI layer."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
        className="space-y-5"
      >
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

