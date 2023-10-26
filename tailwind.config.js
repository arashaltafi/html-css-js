/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./tailwindcss/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode : "class",
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
      "Dana": "Dana",
      "DanaMedium": "Dana Medium",
      "DanaBold": "Dana Bold",
      "MorabbaLight": "Morabba Light",
      "MorabbaMedium": "Morabba Medium",
      "MorabbaBold": "Morabba Bold",
    },
    extend: {
      width: {
        400: '100rem',
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
        },
        "brown": {
          "100": "#ECE0D1",
          "300": "#DBC1AC",
          "600": "#967259",
          "900": "#634832"
        }
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
        "medium": "2px 2px 10px 1px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem"
      },
      spacing: {
        "27": "6.875rem",
        "small": "32px",
        "30": '120px',
        "90": '360px',
        "100": '400px'
      },
      letterSpacing: {
        "tightest": "-0.065em"
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    // require("daisyui")
    function ({addVariant}) {
      addVariant("child", "& > *")
      addVariant("child-hover", "& > *:hover")
    }
  ]
}

