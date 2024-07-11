/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.jsx",
    "./src/MainBody/**/*.tsx",
  ],
  important: "#root",
  theme: {
    extend: {
      keyframes: {
        "fade-in-up": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 30%, 0)",
          },
          "40%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: 0,
          },
          "40%": {
            opacity: 0,
          },
        },
      },
      animation: {
        fadeout: "fade-out 1s ease-out 0.25s 1",
        fadeinup: "fade-in-up 1s ease-in-out 0.25s 1",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};

