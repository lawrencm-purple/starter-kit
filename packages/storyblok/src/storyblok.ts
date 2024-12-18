import { ISbResponse, ISbStoriesParams, ISbStory } from "@storyblok/react";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

import FeatureViewModel from "./view-models/components/feature/feature-view-model";
import GridViewModel from "./view-models/components/grid/grid-view-model";
import HeroBannerViewModel from "./view-models/components/hero-banner/hero-banner-view-model";
import TabPanelViewModel from "./view-models/components/tabs-panel/tab-panel-view-model";
import TabsPanelViewModel from "./view-models/components/tabs-panel/tabs-panel-view-model";
import TeaserViewModel from "./view-models/components/teaser/teaser-view-model";
import { PageViewModel } from "./view-models/pages/page-view-model";

export const getStoryblokApi = storyblokInit({
  accessToken: "jWIvXxlpnJ0ANccBJmChaAtt",
  use: [apiPlugin],
  apiOptions: {
    region: "ap",
  },
  components: {
    teaser: TeaserViewModel,
    grid: GridViewModel,
    page: PageViewModel,

    feature: FeatureViewModel,
    heroBanner: HeroBannerViewModel,
    tabPanel: TabPanelViewModel,
    tabsPanel: TabsPanelViewModel,
  },
});

export type { ISbStoriesParams, ISbStory, ISbResponse };
