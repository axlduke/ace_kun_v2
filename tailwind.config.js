/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cutive-mono': ['Cutive Mono', 'monospace'],
        'nunito': ['Nunito', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'poiret-one': ['Poiret One', 'cursive'],
        'rubik-mono-one': ['Rubik Mono One', 'sans-serif'],
        'source-code-pro': ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}