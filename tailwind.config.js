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
        paper: '#fafafa',
        surface: '#f0efec',
        'surface-2': '#e7e5e0',
        ink: '#0a0a0a',
        muted: '#6b6b6b',
        accent: {
          DEFAULT: '#ff3d00',
          hover: '#e63600',
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
