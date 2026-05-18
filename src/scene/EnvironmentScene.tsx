import { Sparkles, Stars } from "@react-three/drei";
import { SceneSwitcher } from "./SceneSwitcher";

type EnvironmentSceneProps = {
  reducedMotion?: boolean;
};

export function EnvironmentScene({ reducedMotion = false }: EnvironmentSceneProps) {
  return (
    <>
      <ambientLight intensity={0.72} />
      <directionalLight position={[4, 5, 3]} intensity={1.35} />
      <pointLight position={[-3, 1.5, 2]} intensity={1.15} color="#14f1ff" />
      <pointLight position={[3, -1, 2]} intensity={0.75} color="#b86bff" />
      <fog attach="fog" args={["#03040b", 6, 14]} />
      <Stars radius={65} depth={38} count={reducedMotion ? 280 : 850} factor={3} saturation={0.25} fade speed={reducedMotion ? 0 : 0.45} />
      <Sparkles
        count={reducedMotion ? 18 : 55}
        scale={[7, 3.4, 3]}
        size={1.35}
        speed={reducedMotion ? 0 : 0.32}
        color="#7cffc4"
        opacity={0.42}
      />
      <SceneSwitcher reducedMotion={reducedMotion} />
    </>
  );
}

