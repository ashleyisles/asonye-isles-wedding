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
    backgroundColor: ['responsive', 'hover', 'focus', 'checked'],
    opacity: ['responsive', 'hover', 'focus', 'disabled'],
    cursor: ['responsive', 'hover', 'focus', 'disabled'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'disabled'],
    boxShadow: ['responsive', 'hover', 'focus', 'active', 'group-hover', 'disabled']
  },
  plugins: [
    require('@tailwindcss/ui'),
    require('@tailwindcss/typography')
  ],
}
