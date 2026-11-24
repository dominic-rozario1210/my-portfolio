"use client";

import React from "react";
import { FolderGit2, Sparkles } from "lucide-react";
import ProjectCard, { ProjectData } from "./ProjectCard";

const projects: ProjectData[] = [
  {
    id: "snip",
    title: "Snip — URL Shortener",
    tagline: "High-Performance Link Shortening & Redirection Engine",
    description:
      "A full-stack URL shortening service engineered with React on the frontend and an Express/Node.js backend backed by MongoDB. Users submit lengthy links to receive deterministic, collision-resistant short codes that seamlessly redirect visitors.",
    stack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "REST API"],
    features: [
      "Custom algorithmic short-code hashing & fast lookup",
      "Instant redirect handling with HTTP status codes",
      "Clean, modern submission UI with real-time copy functionality",
      "Robust MongoDB schema for URL mapping and persistence",
    ],
    liveUrl: "https://url-shortner-fe-mocha.vercel.app/",
    githubUrl: "https://github.com/dominic-rozario1210",
    accent: "cyan",
    mockupType: "url-shortener",
  },
  {
    id: "mern-auth",
    title: "MERN Authentication System",
    tagline: "Enterprise-Grade JWT & Password Security Service",
    description:
      "A complete, production-ready full-stack authentication system built on the MERN stack. Features secure registration, login with bcrypt password hashing, token validation middleware, and comprehensive password reset token workflows.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "bcryptjs", "JWT"],
    features: [
      "Secure salt-and-hash password storage using bcryptjs",
      "JSON Web Token (JWT) session authorization & protected routes",
      "End-to-end forgot password & verification token lifecycle",
      "Input validation, error boundaries & sanitized database transactions",
    ],
    liveUrl: "https://mernstack-authentication.vercel.app/",
    githubUrl: "https://github.com/dominic-rozario1210",
    accent: "violet",
    mockupType: "auth",
  },
  {
    id: "smart-cart",
    title: "Smart Cart",
    tagline: "Dynamic E-Commerce Cart with Global State Management",
    description:
      "A responsive shopping cart application developed in React with Redux Toolkit. Demonstrates centralized store architecture, immutable state mutation via slices, and instant cart total recomputations on the client.",
    stack: ["React", "Redux Toolkit", "JavaScript", "Tailwind CSS"],
    features: [
      "Redux Toolkit slice architecture for predictable state transitions",
      "Real-time item count mutations, quantity limits & subtotal math",
      "Optimistic UI updates with instant responsive feedback",
      "Persistent cart state modeling for modern e-commerce checkout",
    ],
    liveUrl: "https://smart-cart-redux.vercel.app/",
    githubUrl: "https://github.com/dominic-rozario1210",
    accent: "cyan",
    mockupType: "cart",
  },
  {
    id: "react-todo",
    title: "React Todo App",
    tagline: "Deterministic Task Management via State Machines",
    description:
      "A structured productivity application emphasizing React state patterns with `useReducer` and Axios for API communications. Supports full asynchronous CRUD actions, state transitions, and responsive task views.",
    stack: ["React", "useReducer", "Axios", "REST API", "CSS Modules"],
    features: [
      "Deterministic state transitions powered by React's useReducer hook",
      "Full asynchronous CRUD lifecycle (Create, Read, Update, Delete)",
      "Axios HTTP client handling with error handling states",
      "Clean, distraction-free interface with instant status toggle",
    ],
    liveUrl: "https://todo-app-demo-pied.vercel.app/",
    githubUrl: "https://github.com/dominic-rozario1210",
    accent: "violet",
    mockupType: "todo",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-label="Featured Projects Showcase"
      className="py-24 px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>03 // FEATURED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
              Selected Projects & Applications
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mt-2">
              Production-deployed full-stack solutions and frontend applications demonstrating core
              engineering principles.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Interactive 3D Perspective Tilt on Hover</span>
          </div>
        </div>

        {/* Projects 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
