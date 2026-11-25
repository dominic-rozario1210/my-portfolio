"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Code2,
  Database,
  Sparkles,
} from "lucide-react";

// Dynamically import Hero3D with SSR disabled for optimal hydration
const Hero3D = dynamic(() => import("./Hero3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[460px] sm:h-[520px] lg:h-[580px] flex items-center justify-center">
      <div className="w-64 h-64 rounded-3xl border border-[#F28C45]/20 bg-surface/40 animate-pulse-slow flex items-center justify-center">
        <span className="font-mono text-xs text-[#F28C45]/70 tracking-wider">
          INITIALIZING 3D PORTRAIT...
        </span>
      </div>
    </div>
  ),
});

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) {
      const topOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById("contact");
    if (elem) {
      const topOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      aria-label="Introduction Hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 lg:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Text & Content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left z-10"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/90 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F28C45] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F28C45]" />
            </span>
            <span className="text-xs font-mono text-foreground font-medium">
              Full Stack Developer Intern @{" "}
              <span className="text-[#F28C45] font-semibold">Bala Labs</span>
            </span>
          </div>

          {/* Headline with Burnt Orange to Warm Apricot Gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.1] mb-4">
            Building Digital Experiences with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F28C45] via-[#FFA96B] to-[#FFC078]">
              Code & Creativity.
            </span>
          </h1>

          {/* Name & Identity */}
          <div className="flex items-center gap-2.5 mb-5 font-mono text-sm text-[#F28C45] tracking-wide">
            <Terminal className="w-4 h-4 text-[#F28C45]" />
            <span>Dominic Rozario</span>
            <span className="text-white/20">•</span>
            <span className="text-muted-foreground">Full Stack Developer</span>
          </div>

          {/* Introduction Paragraph */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
            I'm a Full Stack Developer Intern at{" "}
            <strong className="text-white font-semibold">Bala Labs</strong>, interested in
            building modern web applications with a strong focus on backend development, scalable
            APIs, and clean architectural design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#F28C45] to-[#FFA96B] text-slate-950 font-bold text-sm flex items-center justify-center gap-2.5 shadow-[0_0_25px_rgba(242,140,69,0.4)] hover:shadow-[0_0_35px_rgba(242,140,69,0.6)] hover:brightness-110 transition-all duration-200 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={scrollToContact}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-surface/85 hover:bg-surface border border-white/10 hover:border-[#F28C45]/40 text-white font-medium text-sm flex items-center justify-center gap-2.5 backdrop-blur-md transition-all duration-200"
            >
              <Mail className="w-4 h-4 text-[#F28C45]" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Socials & Tech Highlights */}
          <div className="flex items-center gap-6 pt-6 border-t border-white/10 w-full max-w-xl">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/dominic-rozario1210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-[#F28C45] hover:border-[#F28C45]/40 hover:bg-white/10 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-muted-foreground hover:text-[#F28C45] hover:border-[#F28C45]/40 hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="h-6 w-[1px] bg-white/10" />

            <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#F28C45]" /> React & Next.js
              </span>
              <span className="flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#FFC078]" /> Node & Express
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: 3D Floating Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Subtle top indicator */}
          <div className="absolute top-2 right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/85 border border-white/10 backdrop-blur-md text-[11px] font-mono text-muted-foreground">
            <Sparkles className="w-3 h-3 text-[#F28C45]" />
            <span>Interactive 3D Portrait</span>
          </div>

          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
}
