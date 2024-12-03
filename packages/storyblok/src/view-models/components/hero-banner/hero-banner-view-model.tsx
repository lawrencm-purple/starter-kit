import React from "react";
import { storyblokEditable } from "@storyblok/react";

import { HeroBannerStoryblok } from "../../../types/storyblok-component-types";

type HeroBannerViewModelProps = {
  blok: HeroBannerStoryblok;
};

const HeroBannerViewModel = ({ blok }: HeroBannerViewModelProps) => {
  return <div {...storyblokEditable(blok)}>HeroBanner</div>;
};

export default HeroBannerViewModel;
