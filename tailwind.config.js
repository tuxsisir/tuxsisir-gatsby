module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.jsx',
    './src/**/*.js'
  ],
  theme: {
    listStyleType: {
      none: 'none',
      roman: 'upper-roman'
    },
    container: {
      center: true,
      padding: {
        default: '2rem',
        sm: '1rem',
        lg: '4rem',
        xl: '8rem'
      }
    },
    extend: {}
  },
  variants: {},
  plugins: []
}
