/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          default: '#87b63b',
        },
        background: {
          main: '#231f20',
        },
      },
    },
  },
  plugins: [],
};
