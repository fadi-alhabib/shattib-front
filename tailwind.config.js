/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#c18a33",
        secondary: "#151f2d",
        brown: "#E0C9A4",
      },
      fontSize: {
        heading01: "2.25rem",
      },
      padding: {
        main: "4rem",
        sidepanel: "16.666667%", // equals w-sidepanel (width)
      },
      width: {
        sidepanel: "16.666667%", // equals m-sidepanel (margin)
      },
    },
  },
  plugins: [],
  safelist: [
    "bg-amber-100",
    "bg-amber-600",
    "bg-sky-100",
    "bg-sky-600",
    "hover:bg-amber-700",
    "hover:bg-sky-700",
  ],
};
