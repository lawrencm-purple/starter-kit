import { dirname, join } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/nextjs').StorybookConfig } */
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
    getAbsolutePath("@storybook/addon-a11y"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/nextjs"),
    options: {},
  },
  webpackFinal: async (config) => {
    config.module.rules = config.module.rules.filter(
      (rule) => rule.test?.toString() !== "/\\.css$/",
    );

    config.module.rules.push({
      test: /\.css$/,
      use: [
        require.resolve("style-loader"),
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: require.resolve("postcss-loader"),
          options: {
            implementation: require.resolve("postcss"),
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      // include: path.resolve(
      //   __dirname,
      //   "../../../packages/component-library/uikit",
      // ),
    });

    // config.resolve.alias = {
    //   "@": path.resolve(__dirname, "../../../packages/component-library/uikit"),
    //   "@ui": path.resolve(
    //     __dirname,
    //     "../../../packages/component-library/uikit/ui",
    //   ),
    //   "@components": path.resolve(
    //     __dirname,
    //     "../../../packages/component-library/uikit/components",
    //   ),
    // };

    return config;
  },
};
export default config;
