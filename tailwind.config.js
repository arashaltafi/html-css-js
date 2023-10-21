/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwindcss/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '3rem'
      }
    },
    extend: {
      width: {
        400: '100rem'
      },
      height: {
        400: '100rem'
      },
      colors: {
        "primary": "#2979FF",
        "secondary": {
          DEFAULT: "#009688",
          "50": "#E0F2F1",
          "100": "#B2DFDB",
          "200": "#80CBC4",
          "300": "#4DB6AC",
          "400": "#26A69A",
          "500": "#009688",
          "600": "#00897B",
          "700": "#00796B",
          "800": "#00695C",
          "900": "#004D40",
          "lighter": "#B2DFDB",
          "darker": "#004D40",
        }
      }
    },
  },
  plugins: [],
}

