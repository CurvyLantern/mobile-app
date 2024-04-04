/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    container: {
      padding: "28px",
    },
    extend: {
      colors: {
        primary: "rgb(17 27 47 / <alpha-value>)",
        secondary: "#3399CC",
        accent: "#00ADEE",
        basicGrey: "#929497",
        darkBlue: "#111B2F",
        lightBlue: "#3FB0DB",
      },
      fontFamily: {
        aeonis: "AeonisMedium",
      },
    },
  },
  plugins: [],
};
