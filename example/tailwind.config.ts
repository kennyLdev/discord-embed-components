import type { Config } from "tailwindcss";

const safeColumnWidths = [1, 2, 3, 4, 5, 6].map(
  (width) => `sm:col-span-${width}`
);

const safelist = [...safeColumnWidths];

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/discord-embed-components/dist/index.js",
  ],
  theme: {},
  plugins: [require("@tailwindcss/forms")],
  safelist,
};

export default config;
