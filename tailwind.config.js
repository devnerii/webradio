/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',  // Inclui todos os diretórios dentro de `src`
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
