module.exports = {
  prefix: 'tw-',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        formBase: '2.5rem',
      },
      transitionProperty: {
        width: 'width',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
