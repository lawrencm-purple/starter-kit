/** @type { import('@storybook/react').Preview } */

import "../globals.css";
import "@com/ui/theme";

import config from "@com/ui/config";
import resolveConfig from "tailwindcss/resolveConfig";

const fullConfig = resolveConfig(config);

console.log("Theme Colors:", fullConfig.theme);

// export const parameters = {
//   designTokens: {
//     // Make sure we're passing the colors correctly
//     colors: {
//       // Spread the colors to ensure they're at the top level
//       ...fullConfig.theme.colors,
//     },
//   },
// };

const preview = {
  parameters: {
    docs: {
      toc: true,
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    designTokens: {
      colors: fullConfig.theme.colors,
    },
  },
};

export default preview;
