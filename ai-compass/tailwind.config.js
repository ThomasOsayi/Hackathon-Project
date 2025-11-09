/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#1a73e8',
        },
        success: {
          500: '#1e8e3e',
        },
        social: {
          DEFAULT: '#1e8e3e',
          light: '#d4f4dd',
        },
        neutral: {
          100: '#f1f3f4',
          700: '#5f6368',
          900: '#202124',
        },
      },
      boxShadow: {
        card: '0 4px 12px rgba(32, 33, 36, 0.08)',
        'card-hover': '0 10px 24px rgba(26, 115, 232, 0.18)',
        glow: '0 0 0 3px rgba(26, 115, 232, 0.35)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

