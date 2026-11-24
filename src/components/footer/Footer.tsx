"use client";

import React from "react";
import { ArrowUp, Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 backdrop-blur-md py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2 text-base font-heading font-bold text-foreground">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>Dominic Rozario</span>
            <span className="text-xs font-mono text-muted-foreground ml-1">
              — Full Stack Developer
            </span>
          </div>
          <p className="text-xs text-muted-foreground">
            Engineering resilient backend architectures and interactive modern web applications.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dominic-rozario1210"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10 transition-all"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10 transition-all"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:domnic85467@gmail.com"
            aria-label="Email Dominic Rozario"
            className="p-2.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-white/10 transition-all"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="p-2.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400 hover:bg-cyan-500/20 hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all ml-2"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-3">
        <p>© {new Date().getFullYear()} Dominic Rozario. All rights reserved.</p>
        <p className="flex items-center gap-1.5 font-mono text-[11px]">
          Designed with Obsidian Matrix & Spatial Bento
        </p>
      </div>
    </footer>
  );
}
