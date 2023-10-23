/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwindcss/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '5rem'
      }
    },
    screens: {
      "mobile": '576px',
      "tablet": '768px',
      "laptop": '992px',
      "desktop": '1280px',
      "desktop-large": '1536px',
      "desktop-2x-large": '1650px',
    },
    fontFamily: {
      "vazir": "vazir",
      "vazir-bold": "vazir bold",
      "vazir-light": "vazir light",
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
      },
      spacing: {
        "27": "6.875rem",
        "small": "32px"
      }
    },
  },
  plugins: [],
}

