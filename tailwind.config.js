/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'optimized-global': ['optimized-global', 'sans-serif'],
      },
      colors: {
        mainGrey: '#565654',
      },
    },
  },
  plugins: [],
}

