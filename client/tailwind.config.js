/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        kodoMono: ["Kode Mono", "monospace"]
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require("daisyui")
  ],
}