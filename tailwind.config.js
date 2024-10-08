/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "custom-calc": "calc(100vh - 80px)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        customGray: "rgba(0, 0, 0, 0.8)", 
      },
      lineHeight: {
        custom: "18px", 
      },
    },
  },
  plugins: [],
};
