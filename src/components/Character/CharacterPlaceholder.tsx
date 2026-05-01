import { Float } from "@react-three/drei";

type CharacterPlaceholderProps = {
  visible: boolean;
  accent?: string;
  reducedMotion?: boolean;
};

export function CharacterPlaceholder({
  visible,
  accent = "#38d9ff",
  reducedMotion = false,
}: CharacterPlaceholderProps) {
  if (!visible) {
    return null;
  }

  return (
    <Float speed={reducedMotion ? 0 : 1.1} rotationIntensity={0.12} floatIntensity={0.25}>
      <group position={[2.58, -1.02, -1.75]} rotation={[0, -0.32, 0]}>
        <mesh position={[0, 1.24, 0]}>
          <sphereGeometry args={[0.32, 24, 24]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.35}
            transparent
            opacity={0.45}
            wireframe
          />
        </mesh>
        <mesh position={[0, 0.56, 0]}>
          <cylinderGeometry args={[0.26, 0.44, 1.05, 24, 1]} />
          <meshStandardMaterial
            color="#dbeafe"
            emissive={accent}
            emissiveIntensity={0.16}
            transparent
            opacity={0.24}
            wireframe
          />
        </mesh>
        <mesh position={[0, -0.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.58, 0.01, 8, 64]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.8} />
        </mesh>
      </group>
    </Float>
  );
}
