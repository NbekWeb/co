const {
  space
} = require("postcss/lib/list");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        15: '60px',
        18: '72px',
        25: '100px',
        50: '200px',
        "12.5": '50px',
        125: '500px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}