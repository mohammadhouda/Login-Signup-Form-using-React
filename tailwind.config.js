/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0.2", transform: "translateY(-20px)" },
        },
      },
      animation: {
        upDown: "upDown 1s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
  ],
};
