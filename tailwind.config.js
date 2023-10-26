/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"], // Add the paths to all of your template files
  theme: {
    extend: {
      colors: {
        "gray-50": "#a6b0cf",
        "gray-200": "#36404a",
        "gray-800": "#2f373f",
        "gray-950": "#262e35",
        "primary-400": "#7269ef",
        "primary-600": "#554fab",
        "primary-900": "#2e2a60",
        "secondary-400": "#abb4d2",
        "status-200": "#06d6a0",
      },
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
