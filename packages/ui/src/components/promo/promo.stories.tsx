import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import React from "react";
import { Promo } from "./promo";

const meta = {
  title: "Components/Promo",
  component: Promo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Promo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Promo",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify default text is rendered
    const defaultText = await canvas.findByText("Promo");
    expect(defaultText).toBeInTheDocument();
  },
};
