/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#007bff",
          dark: "#6b46c1",
        },
        secondary: {
          light: "#6c757d",
          dark: "#6b7280",
        },
        background: {
          primary: "#E1F7F5",
          secondary: "#9AC8CD",
          darker: "#0E46A3",
        },
        color: {
          primary: "#13308e",
          secondary: "#ffff",
        },
      },
      fontFamily: {
        inter: ["Inter"],
        pop: ["Poppins"],
      },
    },
  },
  plugins: [],
};
