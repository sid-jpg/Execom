/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        'w-1': 1,
        'h-1': 1,
      },
    },
  },
  plugins: [],
};