/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(15deg)',
          },
          '50%': {
            transform: 'rotate(0eg)',
          },
          '75%': {
            transform: 'rotate(-15deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
      },
      animation: {
        shake: 'shake 1s ease-in-out',
      },
    },
  },
  plugins: [],
};
