/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        xlight:'#f6eddc',
        light:'#e3e5d7',
        medium:'#bdd6d2',
        dark:'#a5c8ca',
        xdark:'#586875',
      }
    },
  },
  plugins: [],
}