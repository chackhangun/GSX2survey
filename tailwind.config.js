/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E9E9F8",
          100: "#D1D1F0",
          400: "#4949C2",
          500: "#1B1BB3",
        },
        gray: {
          300: "#C6C6C6",
          500: "#A0A0A0",
          700: "#646464",
          900: "#101010",
        },
      },
    },
  },
  plugins: [],
};
