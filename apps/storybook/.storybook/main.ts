/* eslint-disable @typescript-eslint/no-require-imports */
import { dirname, join } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): string {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/ui/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../packages/auth/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../../../turbo/generators/docs/*.@(mdx)",
    "../../**/docs/*.@(mdx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@chromatic-com/storybook"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: "@storybook/experimental-nextjs-vite",
  // framework: {
  //   name: getAbsolutePath("@storybook/react-vite"),
  //   options: {

  //   },
  // },

  viteFinal: async (config) => {
    return {
      ...config,
      //add support for nextjs

      define: {
        "process.env": {},
      },
      css: {
        postcss: {
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    };
  },
};
export default config;
