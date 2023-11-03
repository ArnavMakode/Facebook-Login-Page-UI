/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        'custom_large': '1075px', //custom large screen
        'custom_medium': '900px', //..
      }
    },
  },
  plugins: [],
}

