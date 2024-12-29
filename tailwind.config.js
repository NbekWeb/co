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
        19: '76px',
        22.5: '90px',
        25: '100px',
        26: '104px',
        50: '200px',
        70: '280px',
        78: '312px',
        "12.5": '50px',
        125: '500px'
      },
      colors: {
        dark: '#080808',
        grey: '#A8A8A8',
        gold: '#D0C6B880',
        ice: '#B8C4D080'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}