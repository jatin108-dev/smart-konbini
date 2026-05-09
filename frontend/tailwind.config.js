/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111111",
        accent: "#c75c5c",
        cream: "#f6f1eb",
        beige: "#e7dccf",
        muted: "#6b6b6b",
        card: "#fffaf5",
      },
    },
  },
  plugins: [],
}