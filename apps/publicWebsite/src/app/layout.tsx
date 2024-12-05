import "../styles/globals.css";

import { type Metadata } from "next";
import StoryblokProvider from "@com/storyblok/provider";
import { GeistSans } from "geist/font/sans";

import { TRPCReactProvider } from "../trpc/react";

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <StoryblokProvider>
          <TRPCReactProvider>{children}</TRPCReactProvider>
        </StoryblokProvider>
      </body>
    </html>
  );
}
``;
