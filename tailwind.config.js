/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,php,js}'
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Verdana', 'Geneva', 'Tahoma', 'sans-serif']
      }
    }
  },
  screens: {
    'xsm': '320px'
  },
  plugins: [],
}

