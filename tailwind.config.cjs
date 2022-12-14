/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require('tailwindcss-image-rendering')(),
  ],
  daisyui: {
    themes: ["light", "dark"],
  },
  safelist: [{pattern: /row-span-[2-8]/}]
}
