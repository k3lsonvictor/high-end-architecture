import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#EFE9DD",
        ink: "#0c0d0b",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        script: ["var(--font-script)"],
        body: ["var(--font-body)"],
      },
    },
  },
  plugins: [],
};
export default config;
