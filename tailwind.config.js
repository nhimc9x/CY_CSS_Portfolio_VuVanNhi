/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      screens: {
        'xs': '475px'
      },
      colors: {
        'ct-text-color': '#a3a1be',
        'ct-active-color': '#80f0ff',
        'ct-sub-active-color': '#f472b2',
        'ct-primary-color': '#1e293b',
        'ct-secondary-color': '#262d47'
      },
      animation: {
        'wave': 'wave 2.1s linear infinite',
      },
      keyframes: {
        'wave': {
          '0%, 60%, 100%': {
            transform: 'rotate(0deg)'
          },
          '10%, 30%': {
            transform: 'rotate(18deg)'
          },
          '20%': {
            transform: 'rotate(-10deg)'
          },
          '40%': {
            transform: 'rotate(-6deg)'
          },
          '50%': {
            transform: 'rotate(12deg)'
          }
        },
      }
    },
  },
  plugins: [],
}
