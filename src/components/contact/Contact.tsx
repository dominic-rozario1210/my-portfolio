"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Github,
  Linkedin,
  Terminal,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [copied, setCopied] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const emailAddress = "domnic85467@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Project Inquiry / Opportunity from ${name || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hi Dominic,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-label="Contact Dominic Rozario"
      className="py-24 px-6 lg:px-12 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>06 // GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Let's Build Something Resilient.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mt-3">
            Whether you have an engineering opportunity, a project to collaborate on, or simply want to connect — my inbox is always open.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Credentials & Copy Button (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="p-7 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl relative overflow-hidden">
              <div className="text-xs font-mono text-cyan-400 mb-2">DIRECT COMMUNICATION</div>
              <h3 className="text-xl font-heading font-bold text-white mb-2">
                Email Dominic Rozario
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Fastest way to reach me for full-stack engineering roles and project discussions.
              </p>

              {/* Email Address Container with Copy Button */}
              <div className="p-3 rounded-xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs sm:text-sm text-cyan-300 truncate select-all">
                  {emailAddress}
                </span>
                <button
                  onClick={copyToClipboard}
                  aria-label="Copy email address"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}?subject=Project%20Inquiry%20from%20Portfolio`}
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-500 text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-cyan-400 transition-colors shadow-[0_0_20px_rgba(0,240,255,0.3)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Open in Email Client</span>
              </a>
            </div>

            {/* Social Channels Card */}
            <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl">
              <div className="text-xs font-mono text-muted-foreground mb-4">
                DEVELOPER PROFILES & NETWORKS
              </div>

              <div className="space-y-3">
                <a
                  href="https://github.com/dominic-rozario1210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                    <div>
                      <div className="text-xs font-semibold text-white">GitHub</div>
                      <div className="text-[11px] font-mono text-muted-foreground">
                        @dominic-rozario1210
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                </a>

                <a
                  href="https://www.linkedin.com/feed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                    <div>
                      <div className="text-xs font-semibold text-white">LinkedIn</div>
                      <div className="text-[11px] font-mono text-muted-foreground">
                        Professional Network
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-cyan-400 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Pre-filled Mail Composer (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-8 rounded-2xl bg-surface/80 border border-white/10 backdrop-blur-xl relative"
          >
            <div className="flex items-center gap-2 mb-2 text-xs font-mono text-cyan-400">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>DIRECT EMAIL COMPOSER</span>
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-muted-foreground mb-6">
              This triggers your email application with your message pre-populated — reliable, private, and guaranteed to reach me directly without third-party form blockers.
            </p>

            <form onSubmit={handleMailtoSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-muted-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Alex Chen"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-muted-foreground mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-muted-foreground mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Dominic, I'd like to discuss an opportunity or project with you..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:brightness-110 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Launch Email with Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
