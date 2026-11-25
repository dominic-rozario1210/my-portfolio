"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Cpu,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Experience", href: "#experience", icon: Briefcase },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      const topOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Floating Rounded Glass Dock */}
      <header
        className={`fixed top-4 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${
          scrolled ? "py-0.5" : "py-1.5"
        }`}
      >
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-surface/85 backdrop-blur-2xl border border-white/12 shadow-glass transition-all duration-300"
        >
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 pl-2 pr-3 py-1 text-[15px] sm:text-base font-heading font-bold text-white tracking-wide group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F28C45] group-hover:shadow-[0_0_10px_#F28C45] transition-all" />
            <span>Dominic</span>
            <span className="text-[#F28C45] text-xs font-mono font-semibold">.dev</span>
          </a>

          <div className="h-5 w-[1px] bg-white/15 mx-1" />

          {/* Navigation Links with 14-15px typography and enhanced clarity */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-[14.5px] font-semibold tracking-normal transition-colors flex items-center gap-1.5 ${
                    isActive
                      ? "text-[#F28C45]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeDockIndicator"
                      className="absolute inset-0 rounded-full bg-white/[0.09] border border-[#F28C45]/40 shadow-[0_0_14px_rgba(242,140,69,0.25)] -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="h-5 w-[1px] bg-white/15 mx-1" />

          {/* Available Status Chip - Prominent and readable */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="flex items-center gap-2 pl-3 pr-3.5 py-1.5 text-xs font-mono font-medium text-emerald-300 bg-emerald-500/15 border border-emerald-500/30 rounded-full hover:bg-emerald-500/25 transition-colors shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>Available</span>
          </a>
        </nav>

        {/* Mobile Top Bar */}
        <div className="flex md:hidden w-full max-w-lg items-center justify-between px-4 py-3 rounded-2xl bg-surface/90 backdrop-blur-2xl border border-white/12 shadow-glass">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="flex items-center gap-2 text-base font-heading font-bold text-white tracking-wide"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#F28C45] shadow-[0_0_8px_#F28C45]" />
            <span>Dominic Rozario</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#F28C45]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 p-4 rounded-2xl bg-surface-light/95 backdrop-blur-2xl border border-white/15 shadow-2xl md:hidden flex flex-col gap-1.5"
          >
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider px-3 py-1 font-medium">
              Navigation
            </div>
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                    isActive
                      ? "bg-[#F28C45]/15 text-[#F28C45] border border-[#F28C45]/35 shadow-sm"
                      : "text-slate-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </a>
              );
            })}

            <div className="pt-2.5 mt-2 border-t border-white/10 flex items-center justify-between px-3">
              <span className="text-xs text-muted-foreground font-mono">Bala Labs Intern</span>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="text-xs text-[#F28C45] font-semibold hover:underline flex items-center gap-1"
              >
                Get in Touch <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
