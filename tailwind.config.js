/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nothing: ["Nothing You Could Do", "sans-serif"],
        dancing: ["Dancing Script", "sans-serif"],
      },
      colors: {
        "w-primary": "#6A96A7",
        "w-secondary": "#bad9d3",
      },
    },
  },
  plugins: [],
};
