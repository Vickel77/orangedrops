import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        default: "#444444",
        primary: "#ff7000",
        secondary: "#0c4200",
        danger: "#FF331F",
        muted: "#909090",
        disabled: "#C4C4C4",
        defaultAccent: "#EEEEEE",
        // primaryAccent: "#FF331F",
        primaryAccent: "#E2E7FA",
        dangerAccent: "#FBD2E0",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
export default config;
