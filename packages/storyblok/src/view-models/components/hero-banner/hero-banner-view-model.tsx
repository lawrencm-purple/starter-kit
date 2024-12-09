import React from "react";
import { HeroBanner } from "@com/ui";
import { storyblokEditable } from "@storyblok/react";

import { HeroBannerStoryblok } from "../../../types/storyblok-component-types";

type HeroBannerViewModelProps = {
  blok: HeroBannerStoryblok;
};

const HeroBannerViewModel = ({ blok }: HeroBannerViewModelProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <HeroBanner
        title={blok.title!}
        description={blok.description!}
        imageUrl={blok.image?.filename!}
        imageAlt={blok.image?.alt!}
      />
    </div>
  );
};

export default HeroBannerViewModel;
