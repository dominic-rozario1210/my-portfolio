"use client";

import React, { useRef, useState } from "react";
import { ExternalLink, Github, Sparkles, CheckCircle2 } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  features: string[];
  liveUrl: string;
  githubUrl?: string;
  accent: "cyan" | "violet";
  mockupType: "url-shortener" | "todo" | "auth" | "cart";
}

export default function ProjectCard({ project }: { project: ProjectData }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState<number>(0);
  const [rotateY, setRotateY] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -7;
    const rotY = ((x - centerX) / centerX) * 7;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const isCyan = project.accent === "cyan";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
      }}
      className="group rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_10px_35px_-10px_rgba(0,240,255,0.2)]"
    >
      {/* Background ambient corner glow */}
      <div
        className={`absolute top-0 right-0 w-44 h-44 rounded-full blur-3xl pointer-events-none -z-10 transition-opacity duration-300 ${
          isHovered ? "opacity-35" : "opacity-15"
        } ${isCyan ? "bg-cyan-500" : "bg-violet-600"}`}
      />

      <div>
        {/* Browser Mockup Chrome Header */}
        <div className="rounded-xl bg-slate-950/70 border border-white/5 p-3 mb-6">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/5">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/5 font-mono text-[10px] text-muted-foreground truncate max-w-[200px] sm:max-w-[280px]">
              {project.liveUrl.replace("https://", "")}
            </div>
            <div className="w-8" />
          </div>

          {/* Abstract Preview Mockup Representation */}
          <div className="h-28 rounded-lg bg-surface-dark/90 p-3.5 flex flex-col justify-center relative overflow-hidden">
            {project.mockupType === "url-shortener" && (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="h-6 flex-1 rounded bg-white/10 border border-white/10 px-2 flex items-center text-[10px] font-mono text-cyan-400 truncate">
                    https://example.com/very-long-url-to-shorten
                  </div>
                  <div className="h-6 px-3 rounded bg-cyan-500/30 border border-cyan-400/40 text-[10px] font-mono text-cyan-300 flex items-center">
                    SNIP
                  </div>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
                  <span>Shortened:</span>
                  <span className="text-emerald-400">snip.li/x9k2p</span>
                </div>
              </div>
            )}

            {project.mockupType === "auth" && (
              <div className="space-y-1.5 max-w-[220px] mx-auto w-full">
                <div className="h-4 w-24 rounded bg-violet-400/30 text-[9px] font-mono text-violet-300 flex items-center px-1.5">
                  JWT_TOKEN: VERIFIED
                </div>
                <div className="h-5 rounded bg-white/10 border border-white/10 px-2 flex items-center text-[10px] font-mono text-muted-foreground">
                  ••••••••••••••••
                </div>
                <div className="flex justify-between text-[9px] font-mono text-emerald-400">
                  <span>● bcrypt Hashed</span>
                  <span>Protected Route ✓</span>
                </div>
              </div>
            )}

            {project.mockupType === "cart" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono text-foreground">
                  <span>Smart Cart (Redux Store)</span>
                  <span className="text-cyan-400">3 Items in Bag</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 flex-1 rounded bg-white/5 border border-white/10 text-[10px] px-2 flex items-center justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="text-white font-semibold">$149.00</span>
                  </div>
                  <div className="h-5 px-2 rounded bg-cyan-500 text-slate-950 font-bold text-[10px] flex items-center">
                    Checkout
                  </div>
                </div>
              </div>
            )}

            {project.mockupType === "todo" && (
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 p-1 rounded bg-white/5 text-[10px] text-muted-foreground line-through">
                  <span className="w-2.5 h-2.5 rounded bg-emerald-500/60" />
                  <span>Setup React useReducer state machine</span>
                </div>
                <div className="flex items-center gap-2 p-1 rounded bg-cyan-500/10 text-[10px] text-cyan-300 font-medium">
                  <span className="w-2.5 h-2.5 rounded border border-cyan-400" />
                  <span>Execute RESTful Axios CRUD calls</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center justify-between">
            <span>{project.title}</span>
            <span
              className={`text-xs font-mono px-2 py-0.5 rounded-full border ${
                isCyan
                  ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                  : "bg-violet-500/10 text-violet-400 border-violet-500/20"
              }`}
            >
              Live Demo
            </span>
          </h3>
          <p className="text-xs font-mono text-muted-foreground mt-0.5">{project.tagline}</p>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Key Features List */}
        <div className="space-y-1.5 mb-5 pt-3 border-t border-white/5">
          {project.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack & Action Links */}
      <div>
        <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-white/5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/5 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-400/40 text-cyan-400 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all shadow-sm hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]"
          >
            <span>Launch Live App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <a
            href={project.githubUrl || "https://github.com/dominic-rozario1210"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} on GitHub`}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-muted-foreground hover:text-white transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
