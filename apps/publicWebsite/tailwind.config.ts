import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

import baseConfig from "@com/tailwind";


export default {
  content: Array.isArray(baseConfig.config.content) 
    ? [...baseConfig.config.content, "../../packages/ui/src/**/*.{ts,tsx}", "./../../packages/storyblok/src/**/*.{ts,tsx}"]
    : ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}", "./../../packages/storyblok/src/**/*.{ts,tsx}"],
  
  presets: [baseConfig.config],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
    },
  },
} satisfies Config;
