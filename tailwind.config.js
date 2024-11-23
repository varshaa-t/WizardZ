/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk']
      },
      borderWidth: {
        '3': '3px',
        '10': '10px'
      },
      colors: {
        'neon-green': '#beff5d'
      },
    },
  },
  plugins: [],
}

