/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#666666",
        secondary: "#F59E0B",
        heading: "#181818",
        border: "#ECECEC",
        wcPrice: "rgba(24, 24, 24, 0.8)",
        wcPriceOld: "rgba(24, 24, 24, 0.5)",
        headerBorder: "rgba(102, 102, 102, 0.15)",
        dropdownSeconder: "rgba(102, 102, 102, 0.7)",
        dropdownGrey: "rgba(102, 102, 102, 0.5)",
        secondaryButton: "#222222",
        pageHeaderBg: "#f6f6f6",
        pageHeaderText: "#777777",
        pageHeaderHeading: "#111111",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
  },
  plugins: [],
};
