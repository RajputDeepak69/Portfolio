/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: '#06b6d4',
        accent: '#0bcce2ff',
        darkbg: '#2a6af3ff',
        card: 'rgba(255, 255, 255, 0)'
      }
    }
  },
  plugins: [],
}
