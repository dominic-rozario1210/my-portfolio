"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Interactive 3D Geodesic Core
function GeodesicSphere({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Group>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  // Subtle floating and rotation animation with mouse responsiveness
  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Base rotation
    meshRef.current.rotation.y += delta * 0.25;
    meshRef.current.rotation.x += delta * 0.15;

    // Mouse parallax tilt
    const targetX = (mouse.current[1] * Math.PI) / 8;
    const targetY = (mouse.current[0] * Math.PI) / 8;

    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      meshRef.current.rotation.x + targetX * 0.05,
      0.05
    );
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      meshRef.current.rotation.y + targetY * 0.05,
      0.05
    );

    // Pulse core
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.04;
      coreRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Geodesic Wireframe Shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.0, 2]} />
        <meshStandardMaterial
          wireframe
          color="#00F0FF"
          emissive="#00F0FF"
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Inner Violet Quantum Core */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[1.2, 0]} />
        <meshPhysicalMaterial
          color="#7928CA"
          emissive="#8B5CF6"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          transmission={0.4}
          thickness={1.5}
        />
      </mesh>

      {/* Orbiting Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.4, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00F0FF" transparent opacity={0.6} />
      </mesh>

      <mesh rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.7, 0.01, 16, 100]} />
        <meshBasicMaterial color="#A78BFA" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

// Surrounding Particle Constellation
function ParticleCloud({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorCyan = new THREE.Color("#00F0FF");
    const colorViolet = new THREE.Color("#8B5CF6");

    for (let i = 0; i < count; i++) {
      // Random distribution within sphere shell
      const radius = 2.5 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.4 ? colorCyan : colorViolet;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.06;
      pointsRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3D() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef<[number, number]>([0, 0]);

  // Check reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }, []);

  // Pause rendering when scrolled out of view
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    mouse.current = [x, y];
  };

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full min-h-[380px] flex items-center justify-center relative">
        <div className="w-64 h-64 rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 via-violet-600/10 to-transparent shadow-[0_0_50px_rgba(0,240,255,0.2)] flex items-center justify-center">
          <div className="w-40 h-40 rounded-full border border-violet-400/40 bg-surface/80 flex items-center justify-center">
            <span className="font-mono text-xs text-cyan-400 tracking-widest">DOMINIC.SYS</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className="w-full h-[400px] sm:h-[480px] lg:h-[550px] relative cursor-grab active:cursor-grabbing select-none"
    >
      {/* Background ambient circular glow behind 3D object */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full bg-cyan-500/15 blur-[90px]" />
        <div className="w-[200px] sm:w-[280px] h-[200px] sm:h-[280px] rounded-full bg-violet-600/20 blur-[80px]" />
      </div>

      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        >
          {/* Cyan and Violet Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} color="#00F0FF" intensity={1.5} />
          <pointLight position={[-10, -10, -10]} color="#8B5CF6" intensity={1.8} />
          <directionalLight position={[0, 5, 5]} color="#FFFFFF" intensity={0.6} />

          <GeodesicSphere mouse={mouse} />
          <ParticleCloud count={160} />
        </Canvas>
      )}
    </div>
  );
}
