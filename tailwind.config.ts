import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      aspectRatio: {
        "banner": "2048 / 1100",
      },
    },
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
export default config;
