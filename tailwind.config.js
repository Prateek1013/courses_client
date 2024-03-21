/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#31353F",
        dark: "#1B2028",
        cancel: "#FF4949",
        dialog: "#252A33",
        primary: "#3263F7",
        error: "#FF4949",
        warning: "#FFB800",
      },
    },
  },
  plugins: [require("daisyui")],
};
