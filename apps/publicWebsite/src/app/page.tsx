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
      <main className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-100">
        <div className="container mx-auto">
          <StoryblokStory story={response.story} />
        </div>
      </main>
    </HydrateClient>
  );
}
