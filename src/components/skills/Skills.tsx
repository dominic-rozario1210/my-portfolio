"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Terminal,
  Wrench,
  Cpu,
  Layers,
  Sparkles,
} from "lucide-react";

interface SkillCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: "cyan" | "violet";
  skills: {
    name: string;
    level: string;
    note?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend Development",
    description: "Core interest area: API routing, business logic, authentication & services",
    icon: Server,
    accentColor: "cyan",
    skills: [
      { name: "Node.js", level: "Core Runtime", note: "Server logic & event loop" },
      { name: "Express.js", level: "Framework", note: "RESTful routes & middleware" },
      { name: "Python", level: "Language", note: "Backend scripting & logic" },
      { name: "Flask", level: "Framework", note: "Lightweight microservices" },
      { name: "RESTful APIs", level: "Architecture", note: "HTTP standards & CRUD" },
      { name: "JWT & Bcrypt", level: "Security", note: "Token auth & password hashing" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    description: "Modern, responsive, dynamic user interfaces & client architecture",
    icon: Layers,
    accentColor: "violet",
    skills: [
      { name: "React", level: "Library", note: "Hooks, useReducer, component lifecycle" },
      { name: "Next.js", level: "Framework", note: "App router, SSR & performance" },
      { name: "TypeScript", level: "Language", note: "Strict typing & interfaces" },
      { name: "JavaScript (ES6+)", level: "Language", note: "Async/await, DOM & closures" },
      { name: "Tailwind CSS", level: "Styling", note: "Utility-first & design tokens" },
      { name: "Redux Toolkit", level: "State Mgmt", note: "Slices, dispatch & global store" },
    ],
  },
  {
    id: "databases",
    name: "Databases & Storage",
    description: "Data persistence, schema design & query optimization",
    icon: Database,
    accentColor: "cyan",
    skills: [
      { name: "MongoDB", level: "NoSQL Document", note: "Mongoose ODM, aggregation" },
      { name: "MySQL", level: "Relational SQL", note: "Schema design, tables & queries" },
    ],
  },
  {
    id: "languages",
    name: "Programming Languages",
    description: "Fundamental languages applied across full-stack applications",
    icon: Terminal,
    accentColor: "violet",
    skills: [
      { name: "JavaScript", level: "Advanced", note: "Full-stack runtime" },
      { name: "TypeScript", level: "Proficient", note: "Type-safe development" },
      { name: "Python", level: "Proficient", note: "Algorithms & backend" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    description: "Version control, workflow automation, testing & cloud deployment",
    icon: Wrench,
    accentColor: "cyan",
    skills: [
      { name: "Git", level: "Version Control", note: "Branching, rebasing & PRs" },
      { name: "GitHub", level: "Collaboration", note: "Repositories & workflows" },
      { name: "Vite", level: "Build Tool", note: "Fast HMR & bundling" },
      { name: "Postman", level: "API Testing", note: "Endpoint testing & verification" },
      { name: "Vercel", level: "Deployment", note: "Continuous integration & hosting" },
      { name: "npm", level: "Package Mgmt", note: "Dependency orchestration" },
    ],
  },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory);

  return (
    <section
      id="skills"
      aria-label="Technical Skills"
      className="py-24 px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>02 // TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Skills & Architecture
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mt-2">
              Verified tech stack backed by practical implementation in my projects and ongoing internship.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === "all"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/40"
                  : "bg-surface text-muted-foreground hover:text-white border border-white/5"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveCategory("backend")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === "backend"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-400/40"
                  : "bg-surface text-muted-foreground hover:text-white border border-white/5"
              }`}
            >
              Backend Focus
            </button>
            <button
              onClick={() => setActiveCategory("frontend")}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeCategory === "frontend"
                  ? "bg-violet-500/20 text-violet-400 border border-violet-400/40"
                  : "bg-surface text-muted-foreground hover:text-white border border-white/5"
              }`}
            >
              Frontend
            </button>
          </div>
        </div>

        {/* Spatial Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredCategories.map((category, idx) => {
            const Icon = category.icon;
            const isCyan = category.accentColor === "cyan";
            const colSpan =
              category.id === "backend" || category.id === "frontend"
                ? "md:col-span-6"
                : category.id === "databases" || category.id === "languages"
                ? "md:col-span-6 lg:col-span-6"
                : "md:col-span-12";

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`${colSpan} p-7 rounded-2xl bg-surface/75 border border-white/10 backdrop-blur-xl hover:border-white/20 transition-all duration-300 relative group overflow-hidden`}
              >
                {/* Top glow border */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isCyan
                      ? "bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                      : "bg-gradient-to-r from-transparent via-violet-400 to-transparent"
                  }`}
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-xl border ${
                        isCyan
                          ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
                          : "bg-violet-500/10 text-violet-400 border-violet-500/20"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-heading font-semibold text-white">
                        {category.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">{category.description}</p>
                    </div>
                  </div>
                </div>

                {/* Skills Pills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-all group/item"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-semibold text-foreground group-hover/item:text-cyan-400 transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">
                          {skill.level}
                        </span>
                      </div>
                      {skill.note && (
                        <p className="text-[11px] text-muted-foreground line-clamp-1">
                          {skill.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
