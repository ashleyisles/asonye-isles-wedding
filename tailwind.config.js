module.exports = {
  purge: [],
  theme: {
    extend: {
      typography: (theme) => ({
        default: {
          css: {
            a: {
              color: theme('colors.blue.600')
            },
          },
        },
      }),
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'checked'],
    borderColor: ['responsive', 'hover', 'focus', 'checked'],
    backgroundColor: ['responsive', 'hover', 'focus', 'checked']
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography')
  ],
}
