import baseConfig from "@com/tailwind";

/** @type {import('tailwindcss').Config} */

module.exports = {
  ...baseConfig.config,
  content: [
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
    "./stories/**/*.{js,jsx,ts,tsx,mdx}",
    "./.storybook/**/*.{js,jsx,ts,tsx,mdx}",
    "../../packages/ui/src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "../../packages/ui/src/shadcn/components/ui/**/*.{js,jsx,ts,tsx,mdx}",
  ],

  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
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
