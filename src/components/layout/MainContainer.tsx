import { lazy, Suspense, useCallback, useMemo } from "react";
import { navItems, type SectionDefinition, type SectionId } from "../../data/portfolio";
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
  const sectionIds = useMemo(() => sections.map((section) => section.id), []);
  const handleActiveChange = useCallback(
    (sectionId: SectionId) => {
      setActiveSection(sectionId);
    },
    [setActiveSection],
  );
  const activeSection = useActiveSection(sectionIds, handleActiveChange);

  return (
    <main className="relative min-h-screen overflow-hidden bg-deep text-white">
      <Suspense fallback={null}>
        <PortfolioCanvas />
      </Suspense>
      <div className="pointer-events-none fixed inset-0 z-[1] grid-mask opacity-20" />
      <div className="pointer-events-none fixed inset-0 z-[2] bg-[radial-gradient(circle_at_center,transparent,rgba(5,7,13,0.58))]" />
      <Navbar items={navItems} activeSection={activeSection} />

      <div className="relative z-10">
        {sections.map(({ id, Component }) => (
          <Component key={id} />
        ))}
      </div>
    </main>
  );
}
