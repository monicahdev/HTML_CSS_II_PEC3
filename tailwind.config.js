/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Inconsolata', 'system-ui', 'sans-serif'],
        second: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

