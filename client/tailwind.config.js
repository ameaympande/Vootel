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
          primary: "#F7EEDD",
          secondary: "#ACE2E1",
          darker: "#008DDA",
        },
        color: {
          primary: "#13308e",
          secondary: "#ffff",
          darker: "#008DDA",
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
