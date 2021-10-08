const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./templates/index.html', './src/styles.postcss'],
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
