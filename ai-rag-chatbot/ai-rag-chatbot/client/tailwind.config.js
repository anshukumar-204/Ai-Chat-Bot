export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          dark: "#3730A3",
          light: "#E0E7FF",
          dm: "#818CF8",
        },
        secondary: { DEFAULT: "#14B8A6", light: "#CCFBF1" },
        accent: { DEFAULT: "#FF7A59", light: "#FFE4DB" },
        highlight: { DEFAULT: "#F59E0B", light: "#FEF3C7" },
        info: { DEFAULT: "#0EA5E9", light: "#E0F2FE" },
        danger: { DEFAULT: "#EF4444", light: "#FEE2E2" },
        app: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        line: "var(--border)",
        ink: "var(--text)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        sans: ["Poppins", "Inter", "sans-serif"],
      },
      borderRadius: { xl2: "1rem" },
      boxShadow: { card: "var(--shadow)" },
      animation: {
        "fade-up": "fadeUp .3s ease-out",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: "translateY(8px)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },
  },
};
