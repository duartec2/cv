/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
      "*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato', ...defaultTheme.fontFamily.sans],
        'quicksand': ['Quicksand', ...defaultTheme.fontFamily.sans],
        'syne': ['Syne', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}

