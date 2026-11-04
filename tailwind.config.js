/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: '#151515',
          dark: '#0e0e0e',
          light: '#222222',
          card: '#1c1c1c',
          border: '#2c2c2c',
        },
        cream: {
          DEFAULT: '#F8F6EF',
          dark: '#eae5d7',
          card: '#ffffff',
          border: '#ded8c4',
        },
        violet: {
          DEFAULT: '#7B5CFF',
          dark: '#6744fa',
          light: '#9e85ff',
          subtle: 'rgba(123, 92, 255, 0.12)',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #7B5CFF)',
          hover: 'var(--color-accent-hover, #6744fa)',
          light: 'var(--color-accent-light, #9e85ff)',
          glow: 'var(--color-accent-glow, rgba(123, 92, 255, 0.25))',
        }
      },
      fontFamily: {
        headline: ['"Anton"', 'sans-serif'],
        text: ['"Roboto Condensed"', 'sans-serif'],
        wordmark: ['"Baloo 2"', 'cursive', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'widest-xl': '0.2em',
      }
    },
  },
  plugins: [],
}
