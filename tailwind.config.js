/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ashgrey: {
          400: '#B8B8B8',
        },
        purpleflower: {
          400: '#BB4ECD',
        },
        neonpurple: {
          400: '#D32BEE',
        },
        gunmetal: {
          400: '#2C2B3A',
        },
        clearblue: {
          400: '#2E86ED',
        },
        lemongreen: {
          400: '#8FFF00',
        },
      },
    },
  },
  plugins: [],
};
