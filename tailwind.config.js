/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'green-background': 'url(/images/green-background.png)'
      },
      fontFamily: {
        sans: 'Montserrat, sans-serif'
      },
      colors: {
        'lg-primary-green': '#00b37e',
        'lg-primary-blue': '#6a6aff',
        'lg-gray-500': '#151515',
        'lg-gray-500-transparent': 'rgba(21, 21, 21, 0.5)',
        'lg-white-500': '#FAF9F6'
      }
    }
  },
  plugins: []
}
