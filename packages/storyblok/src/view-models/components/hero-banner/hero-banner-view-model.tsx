import React from "react";
import { HeroBanner } from "@com/ui";
import { storyblokEditable } from "@storyblok/react";

import { HeroBannerStoryblok } from "../../../types/storyblok-component-types";

type HeroBannerViewModelProps = {
  blok: HeroBannerStoryblok;
};

const HeroBannerViewModel = ({ blok }: HeroBannerViewModelProps) => {
  console.log("JSON.stringify(blok.images[0], null, 1)");

  function optimizeImage(image: {
    [x: string]: any;
    alt?: string | null;
    copyright?: string | null | undefined;
    fieldtype?: "asset";
    id?: number;
    filename: any;
    name?: string;
    title?: string | null;
    focus: any;
    meta_data?: { [k: string]: any } | undefined;
    source?: string | null | undefined;
    is_external_url?: boolean | undefined;
    is_private?: boolean | undefined;
    src?: string | undefined;
    updated_at?: string | undefined;
    width?: number | null | undefined;
    height?: number | null | undefined;
    aspect_ratio?: number | null | undefined;
    public_id?: string | null | undefined;
    content_type?: string | undefined;
  }) {
    if (!image.filename) return null;

    // Resize the image to 1200px width and maintain the original aspect ratio.
    let imageSource = image.filename + `/m/1200x600`;

    if (image.focus) imageSource += `/filters:focal(${image.focus})`;
    // if image.focus exist then append the focus point filters to the image

    return imageSource;
  }

  // console.log(JSON.stringify(blok.images[0], null, 1));

  return (
    <div {...storyblokEditable(blok)}>
      <HeroBanner
        title={blok.title!}
        description={blok.description!}
        images={
          blok.images?.map((i) => ({
            imageUrl: optimizeImage(i),
            imageAlt: i.alt!,
          }))!
        }
      />
    </div>
  );
};

export default HeroBannerViewModel;
