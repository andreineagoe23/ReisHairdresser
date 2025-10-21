/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fdf4f5",
          100: "#fce7e9",
          200: "#f9d4d8",
          300: "#f4b2bb",
          400: "#ec8595",
          500: "#e05974",
          600: "#cc3a5a",
          700: "#ac2a49",
          800: "#8f2640",
          900: "#7a243b",
        },
        gold: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
      },
    },
  },
  plugins: [],
};
