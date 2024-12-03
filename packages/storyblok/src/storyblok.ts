import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import PageViewModel from "./view-models/pages/page-view-model";
import TeaserViewModel from "./view-models/components/teaser/teaser-view-model";
import GridViewModel from "./view-models/components/grid/grid-view-model";
import FeatureViewModel from "./view-models/components/feature/feature-view-model";

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
  },
});
