import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type CharacterPlaceholderProps = {
  visible: boolean;
  accent?: string;
  reducedMotion?: boolean;
  position?: [number, number, number];
  scale?: number;
};

export function CharacterPlaceholder({
  visible,
  accent = "#38d9ff",
  reducedMotion = false,
  position = [2.55, -1.02, -1.75],
  scale = 1,
}: CharacterPlaceholderProps) {
  const avatar = useRef<Group>(null);
  const rightArm = useRef<Group>(null);
  const leftArm = useRef<Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!avatar.current || reducedMotion) {
      return;
    }

    const time = clock.elapsedTime;
    avatar.current.rotation.y = -0.32 + Math.sin(time * 0.7) * 0.06 + pointer.x * 0.08;
    avatar.current.position.y = Math.sin(time * 1.2) * 0.035;

    if (rightArm.current) {
      rightArm.current.rotation.z = -0.72 + Math.sin(time * 1.4) * 0.05;
    }

    if (leftArm.current) {
      leftArm.current.rotation.z = 0.72 + Math.cos(time * 1.2) * 0.045;
    }
  });

  if (!visible) {
    return null;
  }

  return (
    <Float speed={reducedMotion ? 0 : 1.05} rotationIntensity={0.08} floatIntensity={0.22}>
      <group position={position} scale={scale}>
        <group ref={avatar}>
          <mesh position={[0, -0.26, 0]}>
            <cylinderGeometry args={[0.5, 0.62, 1.18, 28]} />
            <meshStandardMaterial color="#f4efe4" roughness={0.72} metalness={0.02} />
          </mesh>

          <mesh position={[0, 0.18, -0.01]} scale={[0.76, 0.34, 0.22]}>
            <sphereGeometry args={[0.48, 32, 16]} />
            <meshStandardMaterial color="#fffaf0" roughness={0.9} />
          </mesh>

          <group ref={leftArm} position={[-0.58, 0.04, 0]} rotation={[0, 0.05, 0.72]}>
            <mesh position={[0, -0.35, 0]}>
              <cylinderGeometry args={[0.13, 0.16, 0.82, 18]} />
              <meshStandardMaterial color="#f4efe4" roughness={0.8} />
            </mesh>
            <mesh position={[0, -0.83, 0]}>
              <sphereGeometry args={[0.16, 18, 18]} />
              <meshStandardMaterial color="#8d563c" roughness={0.78} />
            </mesh>
          </group>

          <group ref={rightArm} position={[0.58, 0.04, 0]} rotation={[0, -0.05, -0.72]}>
            <mesh position={[0, -0.35, 0]}>
              <cylinderGeometry args={[0.13, 0.16, 0.82, 18]} />
              <meshStandardMaterial color="#f4efe4" roughness={0.8} />
            </mesh>
            <mesh position={[0, -0.83, 0]}>
              <sphereGeometry args={[0.16, 18, 18]} />
              <meshStandardMaterial color="#8d563c" roughness={0.78} />
            </mesh>
          </group>

          <mesh position={[-0.23, -1.08, 0]} rotation={[0, 0, 0.1]}>
            <cylinderGeometry args={[0.15, 0.2, 0.95, 18]} />
            <meshStandardMaterial color="#8f9299" roughness={0.82} />
          </mesh>

          <mesh position={[0.23, -1.08, 0]} rotation={[0, 0, -0.1]}>
            <cylinderGeometry args={[0.15, 0.2, 0.95, 18]} />
            <meshStandardMaterial color="#8f9299" roughness={0.82} />
          </mesh>

          <mesh position={[-0.26, -1.6, 0.09]} scale={[1.35, 0.42, 0.7]}>
            <sphereGeometry args={[0.18, 18, 12]} />
            <meshStandardMaterial color="#e8e8e2" roughness={0.7} />
          </mesh>

          <mesh position={[0.26, -1.6, 0.09]} scale={[1.35, 0.42, 0.7]}>
            <sphereGeometry args={[0.18, 18, 12]} />
            <meshStandardMaterial color="#e8e8e2" roughness={0.7} />
          </mesh>

          <mesh position={[0, 0.58, 0]}>
            <sphereGeometry args={[0.34, 32, 32]} />
            <meshStandardMaterial color="#9a6246" roughness={0.68} />
          </mesh>

          <mesh position={[0, 0.78, -0.01]} scale={[1, 0.48, 0.86]}>
            <sphereGeometry args={[0.36, 32, 16]} />
            <meshStandardMaterial color="#0d1117" roughness={0.62} />
          </mesh>

          <mesh position={[0, 0.43, 0.26]} rotation={[Math.PI / 2, 0, 0]} scale={[1.0, 0.54, 0.42]}>
            <torusGeometry args={[0.18, 0.045, 10, 40]} />
            <meshStandardMaterial color="#101010" roughness={0.82} />
          </mesh>

          <mesh position={[-0.11, 0.61, 0.31]} scale={[1.15, 0.68, 0.28]}>
            <sphereGeometry args={[0.055, 16, 10]} />
            <meshStandardMaterial color="#07080a" roughness={0.4} metalness={0.2} />
          </mesh>

          <mesh position={[0.11, 0.61, 0.31]} scale={[1.15, 0.68, 0.28]}>
            <sphereGeometry args={[0.055, 16, 10]} />
            <meshStandardMaterial color="#07080a" roughness={0.4} metalness={0.2} />
          </mesh>

          <mesh position={[0, 0.61, 0.33]}>
            <boxGeometry args={[0.15, 0.018, 0.018]} />
            <meshStandardMaterial color="#111827" roughness={0.35} metalness={0.45} />
          </mesh>

          <mesh position={[0, -1.63, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.72, 0.012, 8, 80]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.9} />
          </mesh>
        </group>

        <mesh position={[0, -1.62, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.96, 0.008, 8, 96]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={0.7}
            transparent
            opacity={0.42}
          />
        </mesh>
      </group>
    </Float>
  );
}
