/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mvp-slate': '#4e4e4e', 
        'mvp-darkblue': '#041527',
        'mvp-blue': '#0057ff',
        'mvp-stone': '#f1f1f1f',
        'mvp-text': '#d3d5d8',
        'mvp-text-p': '#3f4c5a',
        'mvp-heading': '#041527',
        'mvp-icon-pink': '#f6c8b4',
      },
      screens: {
        'sm': '640px',
        'md': '786px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}