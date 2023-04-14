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
        'lt-blue1': '#1D04BF',
        'lt-blue2': '#15038C',
        'lt-blue3': '#16193B',
        'dk-gray1': '#1d263d',
        'dk-gray2': '#111727',
      }
    },

  },
  plugins: [],
}

