/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'bg-black': '#1f2328',
        'bg-white': '#f8f9fa',
        'bg-gray': '#636c76',
        'bg-light-gray': '#6e7781',
        'bg-blue': '#0969da',
        'bg-green': '#1f883d',
        'bg-yellow': '#9a6700',
        'bg-orange': '#bc4c00',
        'bg-red': '#cf222e',
        'bg-purple': '#8250df',
        'bg-pink': '#bf3989',
      },
      fontFamily: {
        'playfair': 'Playfair Display, serif'
      }
    },
  },
  plugins: [],
}