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
        background: "#211A17", // Burnt Orange Deep Background
        foreground: "#F8FAFC",
        surface: {
          DEFAULT: "#30231D", // Burnt Orange Card / Surface Background
          light: "#3E2E27",
          dark: "#251D1A",
        },
        border: "rgba(255, 255, 255, 0.1)",
        // Map accent tokens to Burnt Orange Palette
        cyan: {
          400: "#F28C45", // Primary Accent: Burnt Orange
          500: "#F28C45",
          glow: "rgba(242, 140, 69, 0.35)",
        },
        violet: {
          400: "#FFC078", // Secondary Accent: Warm Apricot / Light Orange
          500: "#FFC078",
          600: "#F28C45",
          glow: "rgba(255, 192, 120, 0.35)",
        },
        orange: {
          primary: "#F28C45",
          secondary: "#FFC078",
          muted: "#FFA96B",
          glow: "rgba(242, 140, 69, 0.35)",
        },
      },
      fontFamily: {
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        heading: ["'Space Grotesk'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)",
        "cyan-violet-glow": "radial-gradient(circle at 50% 50%, rgba(242, 140, 69, 0.20), rgba(255, 192, 120, 0.12) 50%, transparent 80%)",
      },
      boxShadow: {
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
        "cyan-glow": "0 0 25px -5px rgba(242, 140, 69, 0.45)",
        "violet-glow": "0 0 25px -5px rgba(255, 192, 120, 0.4)",
        "orange-glow": "0 0 25px -5px rgba(242, 140, 69, 0.45)",
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
