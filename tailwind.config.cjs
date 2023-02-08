/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {backgroundImage: {
      'hero-pattern': "url('./src/assets/left.png')",
      'grr-pattern': "url('./src/assets/grr.jpg')",
      'star-pattern': "url('./src/assets/start.jpg')",
      'start-pattern': "url('./src/assets/stars.jpg')"
    }},
  },
  plugins: [],
}
