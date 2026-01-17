/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050509',
        'card-dark': '#0f1114',
        primary: '#00b4ff',
        accent: '#00ffe0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 10px rgba(0, 180, 255, 0.5)',
        'glow-cyan': '0 0 10px rgba(0, 255, 224, 0.5)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
