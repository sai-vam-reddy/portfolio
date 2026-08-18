"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useScroll } from "framer-motion";
import * as THREE from "three";


// 🌌 STAR BACKGROUND (NO SCROLL HERE)
function StarField() {
  const ref = useRef();

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(8000 * 3);
    const colors = new Float32Array(8000 * 3);

    for (let i = 0; i < 8000; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);
      const r = 5 + Math.random() * 5;

      positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = r * Math.cos(theta);

      const color = new THREE.Color();
      color.setHSL(0.55 + Math.random() * 0.1, 0.8, 0.9);

      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    return { positions, colors };
  }, []);

  // ⭐ simple background animation (NO scroll)
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        colors={colors}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          vertexColors
          size={0.012}
          sizeAttenuation
          depthWrite={false}
          opacity={1}
        />
      </Points>
    </group>
  );
}


// 🔄 SCROLL-BASED OBJECT (ONLY HERE)
function ScrollObject() {
  const ref = useRef();
  const { scrollYProgress } = useScroll();

  useFrame(() => {
    if (ref.current) {
      const scroll = scrollYProgress.get();

      // smooth rotation
      ref.current.rotation.y +=
        (scroll * Math.PI * 2 - ref.current.rotation.y) * 0.05;

      ref.current.rotation.x +=
        (scroll * Math.PI - ref.current.rotation.x) * 0.05;

      // smooth vertical movement
      ref.current.position.y +=
        ((scroll - 0.5) * 1.5 - ref.current.position.y) * 0.05;
    }
  });

  return (
    <mesh ref={ref} scale={0.6} position={[2, 0, 0]}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial
        color="#00ffff"
        wireframe
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}


// 🎯 MAIN SCENE
export default function ThreeScene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[2, 2, 2]} intensity={2} />
        <pointLight position={[2, 2, 2]} intensity={2} />

        <StarField />
        <ScrollObject />
      </Canvas>
    </div>
  );
}
