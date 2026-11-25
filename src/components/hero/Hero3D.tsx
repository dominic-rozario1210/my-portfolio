"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import * as THREE from "three";
import { Sparkles, Terminal, ShieldCheck } from "lucide-react";

// 3D Orbital Rings System - Burnt Orange Palette
function OrbitalRings({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const groupRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // Smooth base rotation
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z += delta * 0.25;
      ring1Ref.current.rotation.x += delta * 0.12;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.2;
      ring2Ref.current.rotation.y += delta * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x -= delta * 0.15;
      ring3Ref.current.rotation.z += delta * 0.1;
    }

    // Mouse parallax tilt for rings
    const targetX = (mouse.current[1] * Math.PI) / 10;
    const targetY = (mouse.current[0] * Math.PI) / 10;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.05
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.05
    );
  });

  return (
    <group ref={groupRef}>
      {/* Primary Burnt Orange Orbital Ring (#F28C45) */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 3, 0.2, 0]}>
        <torusGeometry args={[2.5, 0.016, 16, 120]} />
        <meshBasicMaterial color="#F28C45" transparent opacity={0.65} />
      </mesh>

      {/* Secondary Warm Apricot Orbital Ring (#FFC078) */}
      <mesh ref={ring2Ref} rotation={[-Math.PI / 3.5, 0.4, 0]}>
        <torusGeometry args={[2.85, 0.014, 16, 120]} />
        <meshBasicMaterial color="#FFC078" transparent opacity={0.55} />
      </mesh>

      {/* Tertiary Outer Amber Ring */}
      <mesh ref={ring3Ref} rotation={[Math.PI / 6, -Math.PI / 4, 0]}>
        <torusGeometry args={[3.2, 0.01, 16, 120]} />
        <meshBasicMaterial color="#FFA96B" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

// Surrounding Particle Constellation - Burnt Orange & Warm Apricot
function ParticleCloud({ count = 180 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorPrimary = new THREE.Color("#F28C45");
    const colorSecondary = new THREE.Color("#FFC078");

    for (let i = 0; i < count; i++) {
      const radius = 2.6 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = Math.random() > 0.45 ? colorPrimary : colorSecondary;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }
    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y -= delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.025;
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
        size={0.045}
        vertexColors
        transparent
        opacity={0.75}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3D() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<[number, number]>([0, 0]);

  // Framer Motion Spring Values for 3D Perspective Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 220, damping: 22 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["9deg", "-9deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-9deg", "9deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-6px", "6px"]);
  const translateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-6px", "6px"]);

  // Detect Touch & Reduced Motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", listener);

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }

    return () => mq.removeEventListener("change", listener);
  }, []);

  // Viewport IntersectionObserver to pause rendering when scrolled away
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
    if (isTouchDevice || prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
    const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(normalizedX);
    y.set(normalizedY);
    mouseRef.current = [normalizedX * 2, -normalizedY * 2];
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
    mouseRef.current = [0, 0];
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] relative flex items-center justify-center select-none"
    >
      {/* Background Ambient Radial Glows (Burnt Orange & Warm Apricot) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-[#F28C45]/15 blur-[100px]" />
        <div className="w-[220px] sm:w-[320px] h-[220px] sm:h-[320px] rounded-full bg-[#FFC078]/15 blur-[90px]" />
      </div>

      {/* Background 3D Canvas with Orbital Rings & Particles */}
      {!prefersReducedMotion && isVisible && (
        <div className="absolute inset-0 pointer-events-none z-0">
          <Canvas
            camera={{ position: [0, 0, 6.2], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[8, 8, 8]} color="#F28C45" intensity={1.6} />
            <pointLight position={[-8, -8, -8]} color="#FFC078" intensity={1.8} />

            <OrbitalRings mouse={mouseRef} />
            <ParticleCloud count={160} />
          </Canvas>
        </div>
      )}

      {/* Foreground 3D Floating Portrait Card with cleanly separated motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-[290px] sm:w-[340px] lg:w-[360px]"
      >
        <motion.div
          style={{
            rotateX: prefersReducedMotion ? 0 : rotateX,
            rotateY: prefersReducedMotion ? 0 : rotateY,
            x: prefersReducedMotion ? 0 : translateX,
            y: prefersReducedMotion ? 0 : translateY,
            transformStyle: "preserve-3d",
          }}
          className={prefersReducedMotion ? "" : "animate-float"}
        >
          {/* Cyberpunk/Burnt Orange Multi-Layered Glowing Frame */}
          <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-[#F28C45]/85 via-white/10 to-[#FFC078]/85 shadow-[0_0_40px_rgba(242,140,69,0.3),0_0_80px_rgba(255,192,120,0.2)]">
            {/* Corner Precision Crosshairs */}
            <span className="absolute -top-1.5 -left-1.5 font-mono text-[10px] text-[#F28C45] font-bold z-20">
              +
            </span>
            <span className="absolute -top-1.5 -right-1.5 font-mono text-[10px] text-[#FFC078] font-bold z-20">
              +
            </span>
            <span className="absolute -bottom-1.5 -left-1.5 font-mono text-[10px] text-[#FFC078] font-bold z-20">
              +
            </span>
            <span className="absolute -bottom-1.5 -right-1.5 font-mono text-[10px] text-[#F28C45] font-bold z-20">
              +
            </span>

            {/* Inner Dark Bezel Container (#30231D Surface) */}
            <div className="bg-[#30231D]/95 backdrop-blur-2xl rounded-[22px] p-3.5 sm:p-4 border border-white/10 relative overflow-hidden flex flex-col">
              {/* Header Info Bar */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-semibold tracking-wider">DOMINIC.SYS</span>
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F28C45]/15 border border-[#F28C45]/30 text-[#F28C45] text-[10px] font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Portrait Image Container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-white/10 shadow-inner group">
                {/* Dominic's Original Photograph */}
                <Image
                  src="/images/dominic-profile.webp"
                  alt="Dominic Rozario — Full Stack Developer"
                  width={400}
                  height={400}
                  priority
                  quality={95}
                  className="w-full h-full object-cover object-top select-none transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle dark vignette at bottom to blend with frame */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#30231D] via-[#30231D]/40 to-transparent pointer-events-none" />

                {/* Soft top-edge light reflection */}
                <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Bottom Footer Metadata */}
              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <div>
                  <div className="font-heading font-bold text-white text-sm">
                    Dominic Rozario
                  </div>
                  <div className="text-[11px] font-mono text-[#F28C45]">
                    Full Stack Developer Intern
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">
                    Affiliation
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    Bala Labs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
