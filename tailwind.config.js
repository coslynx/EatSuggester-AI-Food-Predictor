const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#2962FF',
        'secondary': '#FF7F00',
        'accent': '#F7F7F7'
      },
    },
  },
  plugins: [
    require('tailwindcss-forms'),
  ],
}