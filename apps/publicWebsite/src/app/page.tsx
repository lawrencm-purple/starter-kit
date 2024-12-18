// import { LatestPost } from "./_components/post";
import { PageStoryblok } from "@com/storyblok/types";
import { ISbStory, StoryblokStory } from "@storyblok/react/rsc";
import { TRPCError } from "@trpc/server";

import { api, HydrateClient } from "../trpc/server";

//invalidate next page
export const revalidate = 0;

export default async function Home() {
  const response = await api.cms.getLayout({
    slug: "home",
  });

  return (
    <HydrateClient>
      <StoryblokStory story={response.story} />
    </HydrateClient>
  );
}
