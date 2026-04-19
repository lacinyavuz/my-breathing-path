/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFBF7",
          100: "#FAF7F0",
          200: "#F5F0E8",
          300: "#EDE6D9",
          400: "#E0D6C3",
        },
        sand: {
          100: "#F0EADC",
          200: "#E4DBC7",
          300: "#D4C7AC",
          400: "#B9A988",
          500: "#9A8A6A",
        },
        sage: {
          100: "#DDE2D5",
          200: "#BAC4AC",
          300: "#9BA989",
          400: "#7C8C6A",
          500: "#5F6E50",
          600: "#4A5640",
          700: "#3A4434",
        },
        terracotta: {
          100: "#F4E2D4",
          200: "#E8C2A8",
          300: "#D8A27E",
          400: "#C6805E",
          500: "#A66547",
          600: "#834F38",
        },
        ink: {
          DEFAULT: "#1F1D1A",
          light: "#2B2826",
          muted: "#6B6560",
          soft: "#8B8578",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 4.5vw, 3.5rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        breathe: "breathe 8s ease-in-out infinite",
        "subtle-float": "subtleFloat 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        breathe: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.15)", opacity: "0.9" },
        },
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
