import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#07070D",
        surface: {
          DEFAULT: "#0F0F1A",
          subtle: "#141424",
          hover: "#18182E",
          card: "#0F0F1A",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          medium: "rgba(255, 255, 255, 0.14)",
          glow: "rgba(124, 58, 237, 0.35)",
        },
        brand: {
          violet: "#7C3AED",
          cyan: "#06B6D4",
          red: "#FF2D55",
        },
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%)",
        "gradient-brand-subtle": "linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.15) 100%)",
        "hero-glow": "radial-gradient(circle at 50% 30%, rgba(124, 58, 237, 0.18), rgba(6, 182, 212, 0.08) 40%, transparent 70%)",
      },
      boxShadow: {
        "glow-sm": "0 0 15px -3px rgba(124, 58, 237, 0.25)",
        "glow-md": "0 0 30px -5px rgba(124, 58, 237, 0.35)",
        "glow-cyan": "0 0 25px -4px rgba(6, 182, 212, 0.3)",
        "glow-red": "0 0 25px -4px rgba(255, 45, 85, 0.3)",
        "pro-card": "0 10px 40px -10px rgba(124, 58, 237, 0.25), 0 0 1px 1px rgba(124, 58, 237, 0.35)",
      },
    },
  },
  plugins: [],
};
