/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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

