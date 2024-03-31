/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gilroy', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        primary: "#003B65",
        h2bg: "#162D4C",
        pbg: "#000000AD",
        btnbg: "#F0BC26"

      }
    },
  },
  plugins: [],
}