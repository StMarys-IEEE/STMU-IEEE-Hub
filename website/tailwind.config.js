/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'ieee-primary': '#00629B',
        'ieee-secondary': '#0095C8',
        'ieee-accent': '#FFB81C',
        'ieee-dark': '#2E2E2E',
        'ieee-light': '#F5F5F5',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


