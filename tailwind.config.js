/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "color-empty",
    "color-scale-1",
    "color-scale-2",
    "color-scale-3",
    "color-scale-4",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic, theme-aware neutrals driven by CSS variables.
        // Accents (#08D9D6 teal, #FF2E63 pink) stay literal and constant.
        page: "rgb(var(--c-page) / <alpha-value>)",
        surface: "rgb(var(--c-surface) / <alpha-value>)",
        content: "rgb(var(--c-content) / <alpha-value>)",
      },
    },
  },
};
