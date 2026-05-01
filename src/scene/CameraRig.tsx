import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import { Vector3 } from "three";
import { useScene } from "../context/SceneContext";
import type { SectionId } from "../data/portfolio";

const cameraTargets: Record<SectionId, [number, number, number]> = {
  landing: [0.1, 0.12, 6],
  about: [-0.28, 0.16, 6.3],
  work: [0.38, 0.05, 6.7],
  tech: [0, 0.24, 6.1],
  career: [-0.2, 0.1, 6.5],
  contact: [0.28, 0, 5.8],
};

export function CameraRig({ enabled = true }: { enabled?: boolean }) {
  const { activeSection } = useScene();
  const target = useMemo(() => new Vector3(), []);

  useFrame(({ camera, pointer }) => {
    if (!enabled) {
      return;
    }

    const [x, y, z] = cameraTargets[activeSection];
    target.set(x + pointer.x * 0.24, y + pointer.y * 0.12, z);
    camera.position.lerp(target, 0.035);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

