import React from "react";
import { PageStoryblok } from "../../types/storyblok-component-types";
import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";

type PageViewModelProps = {
  blok: PageStoryblok;
};

const pageViewModel = ({ blok }: PageViewModelProps) => {
  return (
    <div className="w-full" {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />)}
    </div>
  );
};

export default pageViewModel;
