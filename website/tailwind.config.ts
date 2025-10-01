import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // IEEE Standard Color Palette
        'ieee-blue': {
          primary: '#00629B',
          secondary: '#0095C8',
        },
        'ieee-yellow': '#FFB81C',
        'ieee-gray': {
          dark: '#2E2E2E',
          light: '#F5F5F5',
        },
        'ieee-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
