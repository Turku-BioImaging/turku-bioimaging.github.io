const colors = require("tailwindcss/colors")

module.exports = {
  purge: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/*.md",
    "./*.html",
  ],
  darkMode: false,
  theme: {
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      grey: colors.coolGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {},
  //   plugins: [require("@tailwindcss/typography")],
}
