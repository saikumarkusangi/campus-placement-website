/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'side-bg':'#172a3a',
        'body-bg':'#D5D5D5'
      },
      fontFamily:{
        'oswald':"Oswald",
        'roboto':'Roboto'
      }
    },
  },
  plugins: [],
}

