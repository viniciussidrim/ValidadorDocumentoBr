/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        xlight:'#ffffff',
        light:'#e5e5e5',
        medium:'#fca311',
        dark:'#1B2333',
        xdark:'#0D1118',
      }
    },
  },
  plugins: [],
}