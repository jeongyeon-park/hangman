/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dongle", "sans-serif"],
      },
      gridTemplateRows: {
        10: "repeat(10, 1fr)",
      },
    },
  },
  plugins: [],
};
