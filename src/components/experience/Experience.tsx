"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="py-24 px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>04 // WORK HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mt-2">
            My career journey in software engineering, contributing to scalable web applications.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12">
          {/* Timeline Item 1: Bala Labs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative group"
          >
            {/* Timeline Glowing Node Indicator */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-surface border-2 border-cyan-400 shadow-[0_0_12px_#00F0FF] group-hover:scale-125 transition-transform" />

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl group-hover:border-cyan-400/30 transition-all duration-300">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Full Stack Developer Intern
                  </h3>
                  <div className="text-sm font-medium text-cyan-400 font-mono mt-0.5">
                    Bala Labs
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Present (Internship)</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities & Impact */}
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Contributing to full-stack web applications with a primary focus on backend systems,
                RESTful service architecture, and modern frontend interfaces. Collaborating closely
                with senior engineering mentorship to build robust, maintainable features.
              </p>

              {/* Responsibilities Bullet Points */}
              <div className="space-y-2.5 mb-6 pt-4 border-t border-white/5">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Developing and maintaining RESTful APIs, implementing robust route handlers and input validation.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Building dynamic, responsive UI components using modern React patterns and clean state architectures.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Participating in code reviews, adhering to Git version control workflows, and debugging complex integration points.
                  </span>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "REST APIs", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/5 text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
