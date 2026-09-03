// @ts-check
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#ebe9e3',
        surface: '#e0ddd4',
        'surface-2': '#d8d5cb',
        ink: '#2b2b2b',
        muted: '#4e4e4e',
        yellow: {
          DEFAULT: '#fff388',
          hover: '#fff066',
        },
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
