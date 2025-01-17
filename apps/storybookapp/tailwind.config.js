import baseConfig from "@com/tailwind/config";

/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./tailwind.config.js",
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "../../packages/ui/src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "../../packages/ui/src/shadcn/components/ui/**/*.{js,jsx,ts,tsx,mdx}",
    "../../packages/storyblok/src/view-models/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      ...baseConfig.config.theme?.extend,
    },
  },
  plugins: [...baseConfig.config.plugins],
};
