/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#00214d',
      white: '#fff',
      primary: '#CCF381',
      'button-text': '#00214d',
      background: '#0B0D58',
      headline: '#ffffff',
      body: '#d3d3d3',
      secondary: '#FF18D0',
      overlay: '#EBF2FA',
      error: '#D33F49',
    },
    extend: {
      animation: {
        shake: 'shake 2s ease-in-out infinite',
        cursor: 'cursor 0.6s linear infinite alternate',
      },
      keyframes: {
        shake: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '10%': {
            transform: 'rotate(15deg)',
          },
          '20%': {
            transform: 'rotate(0eg)',
          },
          '30%': {
            transform: 'rotate(-10deg)',
          },
          '40%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(0deg)',
          },
        },
        cursor: {
          '0%, 40%': { opacity: 1 },
          '60%, 100%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
