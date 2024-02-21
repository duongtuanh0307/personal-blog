/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
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
        sunrise: "url('/illustrations/sunrise.png')",
        day: "url('/illustrations/day.png')",
        sunset: "url('/illustrations/sunset.png')",
        night: "url('/illustrations/night.png')",
      },
      gridTemplateColumns: {
        "3-1": "3fr 1fr",
      },
    },
    maxWidth: {
      1280: "1280px",
    },
    minWidth: {
      60: "240px",
    },
    typography: {
      default: {
        css: {
          maxWidth: "none",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      addUtilities({
        ".text-shadow-dark": {
          "text-shadow": "1px 1px 10px #3b82f6",
        },
        ".text-shadow-light": {
          "text-shadow": "1px 1px 4px #ffffff",
        },
        ".text-shadow-none": {
          "text-shadow": "none"
        }
      });
    }),
  ],
};
