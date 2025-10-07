import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nf: { 
          bg: "#0B0516", 
          ink: "#EDE9FE", 
          dim: "#C4B5FD", 
          g1: "#C084FC", 
          g2: "#7C3AED",
          panel: "rgba(255,255,255,0.04)",
          neon: "#a78bfa", 
          neon2: "#7c3aed",
          primary: "#C084FC", 
          accent: "#7C3AED"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Sora', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: "0 0 24px rgba(124,58,237,0.45)",
        glowSoft: "0 0 16px rgba(167,139,250,0.35)",
        'nf': '0 10px 30px rgba(124,58,237,0.12), inset 0 0 0 1px rgba(255,255,255,0.04)',
        'nf-strong': '0 20px 60px rgba(124,58,237,0.18)',
        'nf-soft': '0 4px 20px rgba(124,58,237,0.08)'
      },
      animation: {
        'pan': 'pan 18s linear infinite',
        'float-gentle': 'float-gentle 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.7s cubic-bezier(0.22,1,0.36,1)',
        'slide-down': 'slide-down 0.3s cubic-bezier(0.22,1,0.36,1)',
      },
      keyframes: {
        'pan': {
          'to': { 'background-position': '200% 0' }
        },
        'float-gentle': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' }
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(12px) blur(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0px) blur(0px)' }
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' }
        }
      }
    }
  },
  plugins: []
};
export default config;