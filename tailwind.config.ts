import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        comfortaa: ["Comfortaa", "inter"],
        carter: ["Carter One", "inter"],
      },
      colors: {
        brand: "#419bfe",
        white: {
          main: "#FFFFFF",
        },
        black: {
          main: "#000000",
          off: "#0e0e0e",
        },
        yellow: {
          main: "#ffa64b",
        },
      },
    },
  },
  plugins: [],
};
export default config;
