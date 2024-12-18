import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { expect, userEvent, within } from "@storybook/test";

import { TabbedContent, TabItem } from "./tabbed-content";

const meta = {
  title: "Components/TabbedContent",
  component: TabbedContent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TabbedContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { label: "Tab 1", content: <div>Content for Tab 1</div> },
      { label: "Tab 2", content: <div>Content for Tab 2</div> },
      { label: "Tab 3", content: <div>Content for Tab 3</div> },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test interacting with the tabs
    const tab2Trigger = await canvas.getByRole("tab", { name: /tab 2/i });
    userEvent.click(tab2Trigger);
    const tab2Content = await canvas.findByText(/content for tab 2/i);
    expect(tab2Content).toBeVisible();

    // Switch back to Tab 1
    const tab1Trigger = await canvas.getByRole("tab", { name: /tab 1/i });
    userEvent.click(tab1Trigger);
    const tab1Content = await canvas.findByText(/content for tab 1/i);
    expect(tab1Content).toBeVisible();
  },
};
