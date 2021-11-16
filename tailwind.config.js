module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
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
