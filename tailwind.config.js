/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0ea5e9', // sky-500
          secondary: '#10b981', // emerald-500
          dark: '#0f172a' // slate-900
        }
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(2, 6, 23, 0.2)'
      }
    }
  },
  plugins: []
};
