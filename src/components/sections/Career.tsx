import { motion } from "framer-motion";
import { careerItems, educationItems } from "../../data/career";
import { staggerContainer } from "../../lib/animations/motionVariants";
import { Section } from "../ui/Section";
import { Timeline } from "../ui/Timeline";

export function Career() {
  return (
    <Section
      id="career"
      eyebrow="Career"
      title="A path from engineering projects to production XR work."
      intro="The timeline connects Sharath's current XR development role, backend training foundation, IoT exposure, and engineering education."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.14 }}
        className="grid gap-8 xl:grid-cols-[1.08fr_0.92fr]"
      >
        <div>
          <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-cyanSignal">
            Experience
          </h3>
          <Timeline items={careerItems} />
        </div>

        <div>
          <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.24em] text-amberSignal">
            Education
          </h3>
          <Timeline items={educationItems} variant="education" />
        </div>
      </motion.div>
    </Section>
  );
}

