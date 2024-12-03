import React from "react";
import { FeatureStoryblok, GridStoryblok } from "../../../types/storyblok-component-types";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

type FeatureViewModelProps = {
  blok: FeatureStoryblok;
};

const FeatureViewModel = ({ blok }: FeatureViewModelProps) => {
  return <div>{blok.name}</div>;
};

export default FeatureViewModel;
