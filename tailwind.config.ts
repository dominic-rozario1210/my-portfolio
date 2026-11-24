import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#05050A",
        foreground: "#F8FAFC",
        surface: {
          DEFAULT: "#0E131F",
          light: "#141A29",
          dark: "#080B12",
        },
        border: "rgba(255, 255, 255, 0.08)",
        cyan: {
          400: "#22D3EE",
          500: "#00F0FF",
          glow: "rgba(0, 240, 255, 0.35)",
        },
        violet: {
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7928CA",
          glow: "rgba(121, 40, 202, 0.35)",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        heading: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "cyan-violet-glow": "radial-gradient(circle at 50% 50%, rgba(0, 240, 255, 0.15), rgba(121, 40, 202, 0.1) 50%, transparent 80%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "cyan-glow": "0 0 25px -5px rgba(0, 240, 255, 0.4)",
        "violet-glow": "0 0 25px -5px rgba(121, 40, 202, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
