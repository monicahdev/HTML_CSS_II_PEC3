/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,scss}'],
  safelist: [
],
  theme: {
    extend: {
      colors: {
        main: '#ffffff',
        second: '#3749ea',
        accent: '#da77ab',
        pop: '#a8e5a1',
        dark: '#1d7340'
      },
      spacing: {
        sm: '0.75rem', 
        md: '1.25rem', 
        lg: '2.5rem'
      },
      screens: {
        sm: '600px',
        md: '768px',
        lg: '992px'
      },
      fontFamily: {
        main: ['Inconsolata', 'system-ui', 'sans-serif'],
        second: ['Outfit', 'system-ui', 'sans-serif'],
      },
      fontSize: {
      'earticle-lg': '2.25rem',
      'earticle-md': '2rem',
      'earticle-sm': '1.75rem',
      'earticle-xs': '1.6rem',
      'quote': '1.2rem',
      'cite-md': '1.1rem',
      'cite-sm': '1rem',
    },
    },
  },
  plugins: [],
}

