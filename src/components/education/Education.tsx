"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Sigma, Brain } from "lucide-react";

interface EducationItem {
  degree: string;
  field: string;
  focus: string;
  description: string;
  topics: string[];
}

const educationList: EducationItem[] = [
  {
    degree: "Master of Science (M.Sc.)",
    field: "Mathematics",
    focus: "Advanced Mathematical Modeling & Applied Logic",
    description:
      "Deepened theoretical and analytical principles, focusing on rigorous mathematical reasoning, algorithmic proofs, optimization theory, and complex problem decomposition.",
    topics: [
      "Advanced Discrete Mathematics",
      "Linear Algebra & Matrix Analysis",
      "Differential Calculus & Optimization",
      "Graph Theory & Combinatorics",
    ],
  },
  {
    degree: "Bachelor of Science (B.Sc.)",
    field: "Mathematics",
    focus: "Foundational Pure & Applied Mathematics",
    description:
      "Established core analytical foundations covering classical algebra, probability, mathematical logic, and quantitative problem-solving methodologies.",
    topics: [
      "Mathematical Logic & Set Theory",
      "Calculus & Real Analysis",
      "Probability & Statistics",
      "Numerical Methods",
    ],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      aria-label="Academic Education"
      className="py-24 px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // ACADEMIC BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
            Education & Theoretical Foundations
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mt-2">
            A formal mathematical education providing rigorous analytical discipline for complex software engineering.
          </p>
        </div>

        {/* Education Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((item, idx) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-violet-400/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                    <Sigma className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                    Graduate Degree
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white group-hover:text-violet-300 transition-colors">
                  {item.degree}
                </h3>
                <div className="text-sm font-medium text-violet-400 font-mono mt-0.5">
                  {item.field}
                </div>
                <div className="text-xs text-muted-foreground mb-4 mt-1 font-mono">
                  {item.focus}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Core Topics Pills */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Key Disciplines
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.topics.map((topic) => (
                    <span
                      key={topic}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
