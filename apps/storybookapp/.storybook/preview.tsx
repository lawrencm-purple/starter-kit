import type { Preview } from "@storybook/react";
import React from "react";

import "../index.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <React.StrictMode>
        <Story />
      </React.StrictMode>
    ),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
