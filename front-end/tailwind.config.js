/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    duration: {
      fast: "3s",
      normal: "8s",
      slow: "15s",
  },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("@designbycode/tailwindcss-text-glitch"),
  ],
}

