/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        myGreen: "#B6FF62",
        myGray: "#333333",
        myBlack: "#1F1F1F",
        Primary: "#141414",
      }
    },
  },
  plugins: [],
}

