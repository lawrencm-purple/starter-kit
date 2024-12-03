// import { LatestPost } from "./_components/post";
import { HydrateClient } from "../trpc/server";
import { getStoryblokApi } from "@com/storyblok";
import { StoryblokStory } from '@storyblok/react/rsc';

export default async function Home() {

    const { data } = await fetchData();


  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100 w-full">
        <div className="container mx-auto">
          <StoryblokStory story={data.story} />
          </div>
        {/* <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            Public Website
          </h1>
        </div> */}
      </main>
    </HydrateClient>
  );
}


export async function fetchData() {
  const storyblokApi = getStoryblokApi();
  return storyblokApi.get('cdn/stories/home', { version: 'draft' });
}