/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green-background': 'url(/images/green-background.png)'
      },
      fontFamily: {
        'sans': 'Montserrat'
      },
      colors: {
        'primary-green': '#00b37e',
        'primary-blue': '#3030ad'
      }
    },
  },
  plugins: [],
}
