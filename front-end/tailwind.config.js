/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1536px',
        '3xl': '1620px',
      }
    },
    duration: {
      fast: "3s",
      normal: "8s",
      medium:"11s",
      slow: "15s",
  },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@designbycode/tailwindcss-text-glitch"),
  ],
}

