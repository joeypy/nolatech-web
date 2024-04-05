/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-shadow":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 25%, transparent 100%)",
      },
      colors: {
        primary: "#03B044",
        secondary: "#07913b",
        counter: "#025923",
        days: "#1ba414",
      },
    },
  },
  plugins: [],
};
