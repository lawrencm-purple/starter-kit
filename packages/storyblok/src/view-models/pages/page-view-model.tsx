import React from "react";
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

import { PageStoryblok } from "../../types/storyblok-component-types";

type PageViewModelProps = {
  blok: PageStoryblok;
};

const PageViewModel = ({ blok }: PageViewModelProps) => {
  return (
    <div className="w-full" {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export { PageViewModel };
