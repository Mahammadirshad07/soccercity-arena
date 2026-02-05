/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'red-primary': '#C41E3A',
        'silver': '#C0C0C0',
        'dark-bg': '#1A1A1A',
      },
      animation: {
        'pulse-red': 'pulse-red 2s infinite',
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
