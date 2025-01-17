// // Import necessary modules and components
import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
// import { expect, within } from "@storybook/test";



import { HeroBanner } from "./hero-banner";

const seed = "abc2qfg";
const imageUrl = `https://picsum.photos/seed/${seed}/800/400`;
const largeImageUrl = `https://picsum.photos/seed/${seed}/2000/1000`;

// Meta information about the component
const meta = {
  title: "Components/HeroBanner",
  component: HeroBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  // decorators: [
  //   (Story: React.ComponentType): JSX.Element => (
  //     <div className="flex h-[100vh] w-full flex-col justify-center bg-slate-100 align-middle">
  //       <div className="container mx-auto sm:p-4">
  //         <Story />
  //       </div>
  //     </div>
  //   ),
  // ],
} satisfies Meta<typeof HeroBanner>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story configuration
export const Default: Story = {
  args: {
    title: "Born to build & run",
    description:
      "Versent exists to architect, build and operate cloud-native applications, data streams, platforms, and services. We are your trusted partner to drive meaningful experiences for future-ready businesses.",
    images: [
      {
        imageUrl:
          "https://a-ap.storyblok.com/f/3000815/2400x1584/4f20156d37/portrait-header-dora-3-desktop-2400x1584.jpg",
        imageAlt: "",
      },
      {
        imageUrl:
          "https://a-ap.storyblok.com/f/3000815/2400x1584/81800ed0dd/portrait-header-che-desktop-2400x1584.jpg",
        imageAlt: "",
      },
    ],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Verify default text is rendered
    // const defaultText = await canvas.findByText("HeroBanner");
    // expect(defaultText).toBeInTheDocument();

    // // Verify description text is rendered
    // const descriptionText = await canvas.findByText(
    //   "This is a HeroBanner component.",
    // );
    // expect(descriptionText).toBeInTheDocument();

    // // Verify image is rendered with correct src
    // const image = await canvas.findByRole("img");
    // expect(image).toHaveAttribute("src", imageUrl);

    // // Assume there's a button interaction
    // const button = await canvas.findByRole("button", { name: /click me/i });
    // button.click();

    // const clickedText = await canvas.findByText("Clicked!");
    // expect(clickedText).toBeInTheDocument();
  },
};

// export const WithLongTitle: Story = {
//   args: {
//     title:
//       "This is an exceptionally long title meant to test how the HeroBanner component handles overflow, text wrapping, and scalability across different screen sizes and devices to ensure that user experience remains optimal and no visual elements are compromised.",
//     description: "Experience the best services we offer.",
//     imageUrl: imageUrl,
//     imageAlt: "image alt tag",
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Verify long title is rendered
//     const longTitle = await canvas.findByText(
//       "This is an exceptionally long title meant to test how the HeroBanner component handles overflow, text wrapping, and scalability across different screen sizes and devices to ensure that user experience remains optimal and no visual elements are compromised.",
//     );
//     expect(longTitle).toBeInTheDocument();
//   },
// };

// export const NoImage: Story = {
//   args: {
//     title: "HeroBanner without Image",
//     description: "This is a HeroBanner component without an image.",
//     imageUrl: "", // Intentionally no image
//     imageAlt: "image alt tag",
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Verify title is rendered
//     const noImageTitle = await canvas.findByText("HeroBanner without Image");
//     expect(noImageTitle).toBeInTheDocument();

//     // Verify no image is present
//     const images = canvas.queryAllByRole("img");
//     expect(images.length).toBe(0);
//   },
// };

// // Test case for empty content
// export const EmptyContent: Story = {
//   args: {
//     title: "",
//     description: "",
//     imageUrl: "",
//     imageAlt: "image alt tag",
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Verify nothing is rendered
//     const anyText = canvas.queryAllByText(/./); // Matches any text
//     expect(anyText.length).toBe(0);

//     const anyImages = canvas.queryAllByRole("img");
//     expect(anyImages.length).toBe(0);
//   },
// };

// // Test case with a very large image
// export const LargeImage: Story = {
//   args: {
//     title: "HeroBanner with Large Image",
//     description: "Testing how a large image is handled by the component.",
//     imageUrl: largeImageUrl, // Very large image
//     imageAlt: "image alt tag",
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Verify title and description are rendered
//     const largeImageTitle = await canvas.findByText(
//       "HeroBanner with Large Image",
//     );
//     expect(largeImageTitle).toBeInTheDocument();

//     const largeImageDescription = await canvas.findByText(
//       "Testing how a large image is handled by the component.",
//     );
//     expect(largeImageDescription).toBeInTheDocument();

//     // Verify large image is present
//     const largeImage = await canvas.findByRole("img");
//     expect(largeImage).toHaveAttribute("src", largeImageUrl);
//   },
// };

// export const WithLargeDescription: Story = {
//   args: {
//     title: "HeroBanner with Large Description",
//     description: `
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie,
//       nunc eu sagittis consectetur, justo erat dignissim orci, eu fermentum lorem
//       nisl nec nunc. Aliquam erat volutpat. Fusce non nisi ut magna bibendum suscipit.
//       Sed ac ornare mi. Curabitur lacinia ultrices purus, at iaculis felis ultrices in.
//       Aenean condimentum, tellus et varius commodo, massa sapien porttitor urna, at
//       vehicula ante purus non justo. Nam ullamcorper facilisis lacus, et luctus enim
//       congue non. Integer tincidunt blandit augue quis pretium. Quisque porta auctor
//       libero, vel efficitur odio cursus vitae. Vestibulum ante ipsum primis in faucibus
//       orci luctus et ultrices posuere cubilia curae; Duis sit amet ultricies justo,
//       nec laoreet mi. Suspendisse potenti. Etiam pharetra ligula vel risus sodales,
//       sed scelerisque mauris tincidunt. Morbi et dolor ut arcu viverra tristique nec
//       fringilla nisl. Nulla facilisi.
//     `,
//     imageUrl: imageUrl,
//     imageAlt: "image alt tag",
//   },
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);

//     // Verify title is rendered
//     const largeDescriptionTitle = await canvas.findByText(
//       "HeroBanner with Large Description",
//     );
//     expect(largeDescriptionTitle).toBeInTheDocument();

//     // Verify large description is rendered
//     const largeDescriptionSnippet = await canvas.findByText(
//       /Lorem ipsum dolor sit amet/i,
//     );
//     expect(largeDescriptionSnippet).toBeInTheDocument();
//   },
// };

// // Add more stories and interactions as needed
