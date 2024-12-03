import React from "react";
import { GridStoryblok } from "../../../types/storyblok-component-types";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

type GridViewModelProps = {
  blok: GridStoryblok;
};

const GridViewModel = ({ blok }: GridViewModelProps) => {
  return (
    <div className="grid grid-cols-3 w-full">
      {blok.columns?.map((nestedBlok) => (
        <div className="">
          <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
        </div>
      ))}
    </div>
  );
};

export default GridViewModel;
