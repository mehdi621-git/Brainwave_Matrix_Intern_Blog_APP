/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(1,134,218)',
        text: 'rgba(0,0,0,0.8)',
      },
      fontSize:{
        'xxs' : "9px"
      },
    },
  },
  plugins: [],
}

