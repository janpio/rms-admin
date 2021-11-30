const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'popin': ["Poppins", "sans-serif"]
    },
    colors: {
      ...defaultTheme.colors,
      'secondary': '#F5F5F6'
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
