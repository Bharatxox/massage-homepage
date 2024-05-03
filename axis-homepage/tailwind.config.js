/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#991F48",
        secondary: "#aaa6c4",
        gray: "#A5A19F",
      },
    },
  },
  plugins: [],
};
