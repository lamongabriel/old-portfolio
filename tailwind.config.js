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
        'lg-primary-green': '#00b37e',
        'lg-primary-blue': '#3030ad',
        'lg-gray-500': '#151515',
        'lg-white-500': '#FAF9F6'
      }
    },
  },
  plugins: [],
}
