import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { SectionId } from "../data/portfolio";

type PerformanceMode = "balanced" | "high";

type SceneContextValue = {
  activeSection: SectionId;
  setActiveSection: (sectionId: SectionId) => void;
  performanceMode: PerformanceMode;
  setPerformanceMode: (mode: PerformanceMode) => void;
  characterEnabled: boolean;
  setCharacterEnabled: (enabled: boolean) => void;
};

const SceneContext = createContext<SceneContextValue | null>(null);

export function SceneProvider({ children }: { children: ReactNode }) {
  const [activeSection, updateActiveSection] = useState<SectionId>("landing");
  const [performanceMode, setPerformanceMode] = useState<PerformanceMode>("balanced");
  const [characterEnabled, setCharacterEnabled] = useState(true);

  const setActiveSection = useCallback((sectionId: SectionId) => {
    updateActiveSection(sectionId);
  }, []);

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      performanceMode,
      setPerformanceMode,
      characterEnabled,
      setCharacterEnabled,
    }),
    [activeSection, characterEnabled, performanceMode, setActiveSection],
  );

  return <SceneContext.Provider value={value}>{children}</SceneContext.Provider>;
}

export function useScene() {
  const context = useContext(SceneContext);

  if (!context) {
    throw new Error("useScene must be used inside SceneProvider");
  }

  return context;
}

