/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk'],
        'space-grotesk-bold': ['Space Grotesk Bold']
      },
      borderWidth: {
        '3': '3px',
        '10': '10px'
      },
      colors: {
        'neon-green': '#beff5d',
        'light-gray': '#f3f3f3'
      },
    },
  },
  plugins: [],
}

