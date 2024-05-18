/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        bounceFadeIn: "bounceFadeIn 2s ease-in-out",
        wordReveal: "wordReveal 0.5s ease-in-out forwards",
      },
      keyframes: {
        bounceFadeIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-50px)",
          },
          "50%": {
            opacity: 0.5,
            transform: "translateY(0)",
          },
          "70%": {
            opacity: 0.7,
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        wordReveal: {
          "0%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("tailwind-scrollbar")],
};
