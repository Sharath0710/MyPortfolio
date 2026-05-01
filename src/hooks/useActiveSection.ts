import { useEffect, useRef, useState } from "react";
import type { SectionId } from "../data/portfolio";

export function useActiveSection(
  sectionIds: SectionId[],
  onChange?: (sectionId: SectionId) => void,
) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0]);
  const lastActiveRef = useRef<SectionId>(sectionIds[0]);
  const idsKey = sectionIds.join("|");

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const anchorY = window.innerHeight * 0.38;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const node = document.getElementById(id);

        if (!node) {
          continue;
        }

        const rect = node.getBoundingClientRect();

        if (rect.top <= anchorY && rect.bottom > anchorY) {
          current = id;
          break;
        }

        if (rect.top <= anchorY) {
          current = id;
        }
      }

      if (current !== lastActiveRef.current) {
        lastActiveRef.current = current;
        setActiveSection(current);
        onChange?.(current);
      }
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [idsKey, onChange]);

  return activeSection;
}
