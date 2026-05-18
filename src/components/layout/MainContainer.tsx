import { lazy, Suspense, useCallback, useMemo } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { navItems, profile, type SectionDefinition, type SectionId } from "../../data/portfolio";
import { useScene } from "../../context/SceneContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import { About } from "../sections/About";
import { Career } from "../sections/Career";
import { Contact } from "../sections/Contact";
import { Landing } from "../sections/Landing";
import { TechStack } from "../sections/TechStack";
import { Work } from "../sections/Work";
import { Navbar } from "./Navbar";

const PortfolioCanvas = lazy(() => import("../../scene/PortfolioCanvas"));

const sections: SectionDefinition[] = [
  { id: "landing", label: "Home", chapter: "00", Component: Landing },
  { id: "about", label: "About", chapter: "01", Component: About },
  { id: "work", label: "Work", chapter: "02", Component: Work },
  { id: "tech", label: "Stack", chapter: "03", Component: TechStack },
  { id: "career", label: "Career", chapter: "04", Component: Career },
  { id: "contact", label: "Contact", chapter: "05", Component: Contact },
];

export function MainContainer() {
  const { setActiveSection } = useScene();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.2 });
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const handleActiveChange = useCallback(
    (sectionId: SectionId) => {
      setActiveSection(sectionId);
    },
    [setActiveSection],
  );
  const activeSection = useActiveSection(sectionIds, handleActiveChange);

  return (
    <main className="xr-stage relative min-h-screen overflow-hidden bg-deep text-white">
      <Suspense fallback={null}>
        <PortfolioCanvas />
      </Suspense>
      <div className="pointer-events-none fixed inset-0 z-[1] xr-depth-grid opacity-[0.42]" />
      <div className="pointer-events-none fixed inset-0 z-[2] xr-light-sweep opacity-[0.68]" />
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-[3] h-[42vh] xr-floor-grid" />
      <div className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        <div className="relative h-52 w-px overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="absolute inset-x-0 top-0 h-full origin-top bg-cyanSignal shadow-holo"
            style={{ scaleY: progressScale }}
          />
        </div>
        <div className="flex flex-col gap-2">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={`Go to ${section.label}`}
              className={`h-2.5 w-2.5 rounded-full border transition ${
                activeSection === section.id
                  ? "scale-125 border-cyanSignal bg-cyanSignal shadow-holo"
                  : "border-white/30 bg-white/10 hover:border-mintSignal hover:bg-mintSignal"
              }`}
            />
          ))}
        </div>
      </div>
      <Navbar items={navItems} activeSection={activeSection} />

      <div className="relative z-10">
        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
        <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
