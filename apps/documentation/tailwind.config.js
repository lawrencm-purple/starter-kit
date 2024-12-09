import baseConfig from "@com/tailwind/config";

const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */

module.exports = {
  // ...baseConfig.config,
  content: [
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
      textShadow: {
        sm: "0 1px 2px rgb(var(--tw-shadow-color))",
        DEFAULT: "0 2px 4px rgb(var(--tw-shadow-color))",
        lg: "0 8px 16px rgb(var(--tw-shadow-color))",
      },
    },
  },

  plugins: [
    ...baseConfig.config.plugins,

    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    }),
  ],
  safelist: [
    "bg-background",
    "bg-foreground",
    "bg-muted",
    "bg-muted-foreground",
    "bg-popover",
    "bg-popover-foreground",
    "bg-border",
    "bg-input",
    "bg-card",
    "bg-card-foreground",
    "bg-primary",
    "bg-primary-foreground",
    "bg-secondary",
    "bg-secondary-foreground",
    "bg-accent",
    "bg-accent-foreground",
    "bg-destructive",
    "bg-destructive-foreground",
    "bg-ring",
    "text-7xl",
    "text-6xl",
    "text-5xl",
    "text-4xl",
    "w-full",
    "prose",
  ],
};
