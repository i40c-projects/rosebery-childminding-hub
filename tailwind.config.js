/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Anton', 'sans-serif'],
      },
      colors: {
        rose: '#E65A7A',
        berry: '#7A1F4D',
        cream: '#FFF7EE',
        beige: '#F4E1C9',
        sage: '#A7C7A3',
        sky: '#A9D8F5',
      },
      borderRadius: {
        panel: '2rem',
        card: '1.5rem',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
