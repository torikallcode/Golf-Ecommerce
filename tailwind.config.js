/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ["#141718"],
      },
      fontFamily: {
        utama: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
