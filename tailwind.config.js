/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFDF9",
        section: "#FFF8F2",
        primary: {
          DEFAULT: "#D4AF37",
          light: "#E6C766",
          dark: "#B8961E",
        },
        accent: {
          DEFAULT: "#B76E79",
          light: "#D49499",
          dark: "#9A5560",
        },
        ink: "#2C2C2C",
        muted: "#6B6B6B",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Jost"', "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1280px",
      },
      spacing: {
        section: "96px",
        "section-sm": "64px",
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        soft: "0 18px 48px -24px rgba(44, 44, 44, 0.18)",
        card: "0 12px 36px -18px rgba(44, 44, 44, 0.16)",
        gold: "0 10px 30px -12px rgba(212, 175, 55, 0.45)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out both",
        shimmer: "shimmer 2.4s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
