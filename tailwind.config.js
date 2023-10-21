/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./tailwindcss/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem'
    },
    extend: {
      width: {
        f: '100rem'
      },
      height: {
        f: '100rem'
      }
    },
  },
  plugins: [],
}

