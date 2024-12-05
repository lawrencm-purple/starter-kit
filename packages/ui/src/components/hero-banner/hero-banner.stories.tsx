import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { expect, within } from "@storybook/test";

import { HeroBanner } from "./hero-banner";

// Meta information about the component
const meta = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: React.ComponentType): JSX.Element => (
      <div className="flex min-h-screen w-full flex-col justify-center bg-slate-100 align-middle">
        <div className="container mx-auto">
          <Story />
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof HeroBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story configuration
export const Default: Story = {
  args: {
    title: "HeroBanner",
    description: "This is a HeroBanner component.",
    image:
      "http://localhost:4000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffailshark.ca156229.png&w=828&q=75",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify default text is rendered
    const defaultText = await canvas.findByText("HeroBanner");
    expect(defaultText).toBeInTheDocument();

    // Verify description text is rendered
    const descriptionText = await canvas.findByText(
      "This is a HeroBanner component.",
    );
    expect(descriptionText).toBeInTheDocument();

    // Verify image is rendered with correct src
    const image = await canvas.findByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "http://localhost:4000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffailshark.ca156229.png&w=828&q=75",
    );

    // Interaction test (e.g., clicking a button if there is one)
    // Assuming there's a button that changes text to 'Clicked!'
    const button = await canvas.findByRole("button", { name: /click me/i });
    button.click();

    const clickedText = await canvas.findByText("Clicked!");
    expect(clickedText).toBeInTheDocument();
  },
};

// Additional story configurations to test different states
export const WithDifferentTitle: Story = {
  args: {
    title: "Welcome to Our Site",
    description: "Experience the best services we offer.",
    image: "https://via.placeholder.com/800x400",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify custom title is rendered
    const customTitle = await canvas.findByText("Welcome to Our Site");
    expect(customTitle).toBeInTheDocument();
  },
};

export const NoImage: Story = {
  args: {
    title: "HeroBanner without Image",
    description: "This is a HeroBanner component without an image.",
    image: "", // Intentionally no image
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify title is rendered
    const noImageTitle = await canvas.findByText("HeroBanner without Image");
    expect(noImageTitle).toBeInTheDocument();

    // Verify no image is present
    const images = canvas.queryAllByRole("img");
    expect(images.length).toBe(0);
  },
};

// Add more stories and interactions as needed
