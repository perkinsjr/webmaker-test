/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'water-green': '#20DF9F',
        'water-cyan': '#18BFAB',
        'water-blue': '#1997BC',
        'dk-gray1': '#1d263d',
        'dk-gray2': '#111727',
      }
    },

  },
  plugins: [],
}

