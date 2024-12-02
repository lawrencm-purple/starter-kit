import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { expect, fn, userEvent, waitFor, within } from "@storybook/test";
import React from "react";

const meta: Meta = {
  component: Button,
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    onClick: fn(),
  },
  args: {
    disabled: false,
    variant: "default",
  },
  render: (args) => (
    <Button {...args} data-testid="button">
      Button
    </Button>
  ),
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: fn(),
  },

  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByTestId("button");
    await step("Check button is in the document", async () => {
      expect(button).toBeInTheDocument();
    });
    await step("Click the button", async () => {
      await userEvent.click(button);
    });

    await waitFor(() => expect(args.onClick).toHaveBeenCalledOnce());
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const WithIcons: Story = {
  args: {},
  render: (args) => (
    <Button {...args}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
      <span>With Icon</span>
    </Button>
  ),
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost", // Ensure this matches case sensitivity if applicable
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
  },
  render: (args) => (
    <Button {...args}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    </Button>
  ),
};
