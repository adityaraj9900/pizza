/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        flame: {
          50:  "#FEF2F0",
          100: "#FDE4DF",
          200: "#FBBDB3",
          300: "#F89587",
          400: "#F46D5B",
          500: "#E63312",
          600: "#C42B0F",
          700: "#A3240C",
          800: "#82180A",
          900: "#610F07",
        },
        gold: {
          400: "#F7CF67",
          500: "#F5A623",
          600: "#D48A0C",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body:    ["'Poppins'", "sans-serif"],
      },
      animation: {
        float:       "float 6s ease-in-out infinite",
        "float-r":   "float 8s ease-in-out infinite reverse",
        "spin-slow":  "spin 25s linear infinite",
        "glow-pulse": "glowPulse 2.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-22px)" },
        },
        glowPulse: {
          "0%,100%": { boxShadow: "0 0 24px rgba(230,51,18,0.4)" },
          "50%":     { boxShadow: "0 0 48px rgba(230,51,18,0.9)" },
        },
      },
    },
  },
  plugins: [],
};
