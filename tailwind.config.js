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
        'lt-blue1': '#5EC8F2',
        'lt-blue2': '#57B7F2',
        'lt-blue3': '#0597F2',
        'lt-blue4': '#0583F2',
      }
    },

  },
  plugins: [],
}

