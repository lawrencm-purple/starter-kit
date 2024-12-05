import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { expect, within } from "@storybook/test";

import { Error } from "./error";

const meta = {
  title: "Components/Error",
  component: Error,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    error: new Error("Error"),
    reset: () => {},
    imageUrl: "failshark.png",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify default text is rendered
    const defaultText = await canvas.findByText("Error");
    expect(defaultText).toBeInTheDocument();
  },
};
