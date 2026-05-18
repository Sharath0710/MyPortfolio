import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { CharacterPlaceholder } from "./CharacterPlaceholder";

function MiniScene() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <ambientLight intensity={0.95} />
      <directionalLight position={[2, 4, 3]} intensity={1.4} />
      <pointLight position={[-2, 1, 2]} color="#14f1ff" intensity={1.2} />
      <pointLight position={[2, -1, 2]} color="#b86bff" intensity={1} />
      <CharacterPlaceholder
        visible
        accent="#b86bff"
        reducedMotion={reducedMotion}
        position={[0, 0.05, 0]}
        scale={0.82}
      />
    </>
  );
}

export default function AvatarMiniStage() {
  return (
    <div className="h-36 w-full overflow-hidden rounded-md bg-black/20">
      <Canvas camera={{ position: [0, 0.15, 4.2], fov: 34 }} dpr={[1, 1.4]}>
        <Suspense fallback={null}>
          <MiniScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
