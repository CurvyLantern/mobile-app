/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./layouts/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111B2F",
        secondary: "#3399CC",
        accent: "#00ADEE",
      },
      fontFamily: {
        aeonis: "AeonisMedium",
      },
    },
  },
  plugins: [],
};
