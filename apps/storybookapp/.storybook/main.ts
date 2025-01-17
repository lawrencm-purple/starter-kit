import { dirname, join } from "path";
import react from "@vitejs/plugin-react";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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
  ],
  framework: {
    name: getAbsolutePath("@storybook/experimental-nextjs-vite"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [
        react({
          jsxRuntime: "automatic",
          jsxImportSource: "react",
          fastRefresh: true,
        }),
      ],
      resolve: {
        alias: {
          "react/jsx-runtime": require.resolve("react/jsx-runtime"),
          "react/jsx-dev-runtime": require.resolve("react/jsx-dev-runtime"),
          react: require.resolve("react"),
          "react-dom": require.resolve("react-dom"),
        },
      },
      define: {
        "process.env": {},
        global: "window",
      },
      build: {
        commonjsOptions: {
          transformMixedEsModules: true,
        },
      },
    });
  },
};

export default config;
