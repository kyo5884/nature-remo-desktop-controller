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
      gray: '#212121',
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
      blur: 'blur(32px)',
    },
    extend: {
      animation: {
        'spin-fast':
          'spin 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
      },
    },
  },
  plugins: [require('tailwindcss-filters')],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
