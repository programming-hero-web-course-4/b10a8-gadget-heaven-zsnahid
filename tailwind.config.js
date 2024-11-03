import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sora: "Sora",
    },
    extend: {
      colors: {
        myPurple: "#9538E2",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [daisyui],
};
