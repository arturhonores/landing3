/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pattern': "url('/images/bg-boost-desktop.svg')"
      },
      colors: {
        customColor: "hsl(257,27%,26%)",
      },
    },
  },
  plugins: [],
}