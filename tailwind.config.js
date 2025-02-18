/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
            bg: 'var(--bg)',
            text: 'var(--text)',
            accent: 'var(--accent)',
            primary: 'var(--primary)',
            real: 'var(--bgreal)',
    }},
  },
  plugins: [],
}