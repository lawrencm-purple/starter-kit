import React from "react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

import { GridStoryblok } from "../../../types/storyblok-component-types";

type GridViewModelProps = {
  blok: GridStoryblok;
};

const GridViewModel = ({ blok }: GridViewModelProps) => {
  return (
    <div className="grid w-full grid-cols-3">
      {blok.columns?.map((nestedBlok) => (
        <div className="" key={nestedBlok._uid}>
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        </div>
      ))}
    </div>
  );
};

export default GridViewModel;
