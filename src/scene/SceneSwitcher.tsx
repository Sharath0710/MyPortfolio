import { Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import type { Group, Mesh } from "three";
import { useScene } from "../context/SceneContext";
import type { SectionId } from "../data/portfolio";

const scenePresets: Record<SectionId, { primary: string; secondary: string; spread: number }> = {
  landing: { primary: "#38d9ff", secondary: "#f25e04", spread: 1.1 },
  about: { primary: "#6ee7b7", secondary: "#38d9ff", spread: 1.24 },
  work: { primary: "#f25e04", secondary: "#38d9ff", spread: 1.4 },
  tech: { primary: "#a78bfa", secondary: "#38d9ff", spread: 1.08 },
  career: { primary: "#38d9ff", secondary: "#6ee7b7", spread: 1.26 },
  contact: { primary: "#fb7185", secondary: "#f6c85f", spread: 1.0 },
};

function FloatingPanel({
  color,
  position,
  rotation,
  scale = 1,
  reducedMotion,
}: {
  color: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: number;
  reducedMotion?: boolean;
}) {
  const group = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) {
      return;
    }

    group.current.rotation.z = rotation[2] + Math.sin(clock.elapsedTime * 0.6 + position[0]) * 0.035;
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.4} rotationIntensity={0.16} floatIntensity={0.55}>
      <group
        ref={group}
        position={position}
        rotation={rotation}
        scale={hovered ? scale * 1.06 : scale}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <mesh>
          <boxGeometry args={[1.32, 0.025, 0.76]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={hovered ? 0.95 : 0.46}
            transparent
            opacity={hovered ? 0.34 : 0.21}
          />
        </mesh>
        <mesh position={[0, 0.02, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.55, 0.006, 6, 72]} />
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.72} />
        </mesh>
      </group>
    </Float>
  );
}

function SignalOrb({
  color,
  position,
  reducedMotion,
}: {
  color: string;
  position: [number, number, number];
  reducedMotion?: boolean;
}) {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!mesh.current || reducedMotion) {
      return;
    }

    mesh.current.rotation.x = clock.elapsedTime * 0.22;
    mesh.current.rotation.y = clock.elapsedTime * 0.18;
  });

  return (
    <mesh ref={mesh} position={position}>
      <icosahedronGeometry args={[0.36, 1]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.62}
        transparent
        opacity={0.52}
        wireframe
      />
    </mesh>
  );
}

export function SceneSwitcher({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const { activeSection } = useScene();
  const preset = scenePresets[activeSection];

  const panels = useMemo(
    () => {
      if (activeSection === "landing") {
        return [
          {
            color: preset.primary,
            position: [1.55, 0.92, -1.8] as [number, number, number],
            rotation: [0.05, 0.42, -0.06] as [number, number, number],
            scale: 1,
          },
          {
            color: preset.secondary,
            position: [1.9, -0.22, -2.35] as [number, number, number],
            rotation: [-0.08, -0.48, 0.08] as [number, number, number],
            scale: 1.08,
          },
          {
            color: preset.primary,
            position: [1.22, -1.18, -2.7] as [number, number, number],
            rotation: [0.16, -0.16, 0.02] as [number, number, number],
            scale: 0.72,
          },
        ];
      }

      return [
        {
          color: preset.primary,
          position: [-1.9 * preset.spread, 0.9, -1.8] as [number, number, number],
          rotation: [0.05, 0.42, -0.06] as [number, number, number],
          scale: 1,
        },
        {
          color: preset.secondary,
          position: [2.1 * preset.spread, -0.2, -2.35] as [number, number, number],
          rotation: [-0.08, -0.48, 0.08] as [number, number, number],
          scale: 1.08,
        },
        {
          color: preset.primary,
          position: [0.4, -1.15, -2.7] as [number, number, number],
          rotation: [0.16, -0.16, 0.02] as [number, number, number],
          scale: 0.72,
        },
      ];
    },
    [activeSection, preset.primary, preset.secondary, preset.spread],
  );

  const orbPositions = activeSection === "landing"
    ? {
        primary: [1.48, 1.15, -2.8] as [number, number, number],
        secondary: [1.34, -0.36, -2.15] as [number, number, number],
      }
    : activeSection === "work"
      ? {
          primary: [1.72, -0.24, -2.25] as [number, number, number],
          secondary: [2.32, 1.1, -2.9] as [number, number, number],
        }
    : {
        primary: [0.22, 0.22, -1.6] as [number, number, number],
        secondary: [1.72, 1.22, -2.8] as [number, number, number],
      };

  return (
    <group>
      {panels.map((panel) => (
        <FloatingPanel key={`${activeSection}-${panel.position.join("-")}`} {...panel} reducedMotion={reducedMotion} />
      ))}
      <SignalOrb color={preset.secondary} position={orbPositions.secondary} reducedMotion={reducedMotion} />
      <SignalOrb color={preset.primary} position={orbPositions.primary} reducedMotion={reducedMotion} />
    </group>
  );
}
