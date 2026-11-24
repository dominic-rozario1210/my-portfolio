"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Binary,
  Layers,
  Server,
  Terminal,
  Brain,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Dominic Rozario"
      className="py-24 px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Binary className="w-3.5 h-3.5" />
            <span>01 // ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Engineering Systems from First Principles
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mt-3">
            Bridging analytical mathematics with modern full-stack development to build
            robust, scalable, and intuitive software applications.
          </p>
        </div>

        {/* Spatial Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Main narrative (8 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-8 p-8 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-semibold text-white">
                  Full Stack Journey & Mindset
                </h3>
                <p className="text-xs font-mono text-muted-foreground">
                  Bala Labs Intern • Continuous Learner
                </p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              I am a <strong className="text-white font-medium">Full Stack Developer Intern at Bala Labs</strong> with a primary passion for building end-to-end web applications. While I craft smooth and responsive user interfaces with React and Next.js, my deepest interest lies in <strong className="text-cyan-400 font-medium">backend engineering</strong> — designing clean REST APIs, architecting secure authentication flows, and modeling resilient database schemas.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-6">
              With a background in mathematics, I approach software engineering through a lens of logical consistency, algorithmic clarity, and rigorous problem decomposition. I focus on creating practical, high-utility software that solves tangible problems.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Scalable Backend APIs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Deterministic State</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Secure Auth & Tokens</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Mathematical Foundation (4 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-4 p-8 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-violet-400/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-violet-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

            <div>
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 w-fit mb-5">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                Mathematical Foundation
              </h3>
              <p className="text-xs font-mono text-violet-400 mb-4">
                B.Sc. & M.Sc. in Mathematics
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                Advanced mathematics taught me how to decompose intricate problems into verifiable theorems. In software, this translates into structured algorithmic thinking, rigorous data validation, and clean abstractions.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 font-mono text-xs text-muted-foreground">
              Applied Logic • Discrete Math • Systems
            </div>
          </motion.div>

          {/* Card 3: Backend & Architecture Focus (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-6 p-7 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-semibold text-white">
                Backend Architecture & Data Integrity
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              I place heavy emphasis on designing solid backend foundations: structuring clean Express and Node.js routes, managing relational and document databases with MySQL and MongoDB, securing endpoints with JWT, and handling data sanitization.
            </p>
          </motion.div>

          {/* Card 4: Continuous Engineering (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-6 p-7 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl hover:border-violet-400/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                <Rocket className="w-5 h-5" />
              </div>
              <h3 className="text-base font-heading font-semibold text-white">
                Practical Execution & Growth
              </h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Every project I build is an opportunity to deepen my production understanding. Whether developing a URL shortener with collision-resistant hashes or building stateful Redux e-commerce carts, I strive for clean patterns and verifiable reliability.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
