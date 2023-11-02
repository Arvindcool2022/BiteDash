/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Example content paths...
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: "'Oswald', sans-serif"
      },
      keyframes: {
        drive: {
          '0%': {
            transform: 'rotateY(180deg)',
            right: '-15rem'
          },

          '30%': {
            transform: 'rotateY(180deg)',
            right: '96%'
          },

          '33%': {
            transform: 'rotateX(0deg)'
          },

          '100%': {
            left: '5px'
          }
        }
      },

      animation: {
        drive: 'drive 6s forwards'
      },

      gridTemplateColumns: {
        'auto-fit-250': 'repeat(auto-fit, minmax(250px, 1fr))'
      }
    }
  },
  plugins: [],
  output: {
    bundle: {
      type: 'javascript'
    }
  }
};
