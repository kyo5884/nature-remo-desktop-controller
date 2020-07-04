module.exports = {
  purge: false,
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: 'var(--color-background)',
      'background-secondary': 'var(--color-background-secondary)',
      white: '#fff',
      black: '#334a52',
      accent: {
        100: '#e2f8ff',
        200: '#c4f1ff',
        300: '#a8eaff',
        400: '#8be3fe',
        500: '#6edcff',
        600: '#25caff',
        700: '#00a6db',
        800: '#006e92',
        900: '#003748',
      },
      transparent: 'transparent',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
  },
  plugins: [require('tailwindcss-filters')],
}
