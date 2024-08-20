/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0081A7', // Example blue color
          alt: '#00AFB9',
          light: '#edf5f7',
        },
        secondary: {
          DEFAULT: '#FED9B7', // Example green color
          light: '#FDFCDC',
        },
        warning: {
          DEFAULT: '#F07167', // Example yellow color
        }
      }
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
