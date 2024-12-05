// This file was generated by the storyblok CLI.
// DO NOT MODIFY THIS FILE BY HAND.
import type { ISbStoryData } from "storyblok";
export interface FeatureStoryblok {
  name?: string;
  component: "feature";
  _uid: string;
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: (FeatureStoryblok | GridStoryblok | HeroBannerStoryblok | PageStoryblok | TeaserStoryblok)[];
  component: "grid";
  _uid: string;
  [k: string]: any;
}

export interface HeroBannerStoryblok {
  title?: string;
  description?: string;
  component: "heroBanner";
  _uid: string;
  [k: string]: any;
}

export interface PageStoryblok {
  title?: string;
  description?: string;
  body?: (FeatureStoryblok | GridStoryblok | HeroBannerStoryblok | PageStoryblok | TeaserStoryblok)[];
  component: "page";
  _uid: string;
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  component: "teaser";
  _uid: string;
  [k: string]: any;
}
