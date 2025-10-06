import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nf: { bg: "#0b0714", neon: "#a78bfa", neon2: "#7c3aed" }
      },
      boxShadow: {
        glow: "0 0 24px rgba(124,58,237,0.45)",
        glowSoft: "0 0 16px rgba(167,139,250,0.35)"
      }
    }
  },
  plugins: []
};
export default config;