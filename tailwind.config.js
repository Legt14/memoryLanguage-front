/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Shark: "#1f2123",
        Mercury: "#e6e6e6",
        SeaBuckthorn: "#f6a13e",
        EnergyYellow: "#f7d75f",
        Jaffa: "#f28235",
        ChateauGreen: "#42a64e",
        Matisse: "#1c7aa2",
      },
      fontFamily: {
        Ubuntu: ["Ubuntu"],
      },
      scale: {
        "-100": "-1",
      },
      rotate: {
        "flip-0":'0deg',
        "flip-180": "180deg",
      },
      perspective: {
        1000: "1000px",
      },
      
    },
    plugins: [],
  },
};
