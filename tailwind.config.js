/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#bc804c",
          secondary: "#915d33",
          accent: "#0e1f26",
          neutral: "#191D24",
          "base-100": "#0f2e31",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
