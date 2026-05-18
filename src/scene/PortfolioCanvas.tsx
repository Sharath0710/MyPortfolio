import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useScene } from "../context/SceneContext";
import { useReducedMotion } from "../hooks/useReducedMotion";
import { CameraRig } from "./CameraRig";
import { EnvironmentScene } from "./EnvironmentScene";

export function PortfolioCanvas() {
  const reducedMotion = useReducedMotion();
  const { performanceMode } = useScene();

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 44 }}
        dpr={performanceMode === "high" ? [1, 1.8] : [1, 1.35]}
        gl={{
          antialias: performanceMode === "high",
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <color attach="background" args={["#03040b"]} />
        <Suspense fallback={null}>
          <CameraRig enabled={!reducedMotion} />
          <EnvironmentScene reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default PortfolioCanvas;
