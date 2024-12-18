// import { LatestPost } from "./_components/post";
import { Metadata } from "next/types";
import { PageStoryblok } from "@com/storyblok/types";
import { ISbStory, StoryblokStory } from "@storyblok/react/rsc";

import { api, HydrateClient } from "../../trpc/server";

// Invalidate next page
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const response = (await api.cms.getPage({
      slug: (await params?.slug) ?? "/",
    })) as ISbStory<PageStoryblok>;

    return {
      title: response.data.story.content?.title || "",
      description: response.data.story.content?.description || "",
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Default Title",
      description: "Default Description",
    };
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  let response;
  try {
    response = (await api.cms.getPage({
      slug: params.slug,
    })) as ISbStory<PageStoryblok>;
  } catch (error) {
    console.error("Error fetching page:", error);
    response = {
      data: {
        story: {
          content: {
            title: "Error Loading Content",
            description: "",
          },
        },
      },
    };
  }

  return (
    <HydrateClient>
      <StoryblokStory story={response.data.story} />
    </HydrateClient>
  );
}
