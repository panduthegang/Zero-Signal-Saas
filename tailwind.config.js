/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'accent-green': '#4ade80',
        'accent-red': '#ef4444',
        'text-muted': '#999',
        'bg-card': '#0a0a0a',
        'border-dark': '#222',
      },
    },
  },
  plugins: [],
};
