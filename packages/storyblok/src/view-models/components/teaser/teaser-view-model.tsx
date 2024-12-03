import React from "react";
import { TeaserStoryblok } from "../../../types/storyblok-component-types";

import { Promo } from "@com/ui";

type TeaserViewModelProps = {
  blok: TeaserStoryblok;
};

const TeaserViewModel = ({ blok }: TeaserViewModelProps) => {
  return <Promo title={blok.headline!} />;
};

export default TeaserViewModel;
