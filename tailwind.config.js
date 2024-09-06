/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        fondo: "#0C151D",
        negro: "#171F26",
        blanco:"#FFFFFF",
        azul:"#14A1F0",
        morado:{
          100:"rgb(243 232 255)",
        }
      },
      spacing:{
        '100':'600px'
      }
    },
  },
  plugins: [],
}

