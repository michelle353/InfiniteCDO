import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette — Infinite CDO
        brand: {
          lavender: "#B9A0F5",      // soft lavender (logo background)
          lavenderLight: "#F4F0FF", // very pale lavender, section backgrounds
          lavenderMid: "#E5DAFC",   // mid lavender, cards / hover states
          deepPurple: "#5B3FD6",    // CTAs, primary accent
          deepPurpleHover: "#4A30C2",
          plum: "#3B236D",          // dark text / footer / dark sections
          plumLight: "#4F2E8A",
          nearBlack: "#111111",     // body text
          offWhite: "#FAFAFA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-2xl": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }],
        "display-xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-lg": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.25", letterSpacing: "-0.015em" }],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-lavender": "linear-gradient(135deg, #F4F0FF 0%, #E5DAFC 100%)",
        "gradient-plum": "linear-gradient(135deg, #3B236D 0%, #5B3FD6 100%)",
        "gradient-hero": "linear-gradient(180deg, #F4F0FF 0%, #FFFFFF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        "card": "0 1px 3px rgba(91,63,214,0.06), 0 8px 24px rgba(91,63,214,0.06)",
        "card-hover": "0 4px 6px rgba(91,63,214,0.08), 0 20px 40px rgba(91,63,214,0.1)",
        "glow-purple": "0 0 40px rgba(91,63,214,0.25)",
        "glow-lavender": "0 0 40px rgba(185,160,245,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
