import { getStoryblokApi } from "@com/storyblok";
import { PageStoryblok } from "@com/storyblok/types";
import { ISbStory, ISbStoryParams } from "@storyblok/react";
import { ISbResponse, ISbResult } from "@storyblok/react/rsc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

// Define specific error types for better handling
const StoryblokErrorCodes = {
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  RATE_LIMITED: 429,
} as const;

// Create a type for the Storyblok API response
const storyblokResponseSchema = z.object({
  story: z.object({
    content: z.any(),
    // Add other expected fields
  }),
  // Add other expected response fields
});

export const cmsRouter = createTRPCRouter({
  getPage: publicProcedure
    .input(
      z.object({
        slug: z.string().min(1, "Slug cannot be empty"),
      }),
    )

    //
    .query(
      async ({ input }) => {
        try {
          const storyblokApi = getStoryblokApi();

          const params: ISbStoryParams = {
            version: "draft",
          };

          return storyblokApi
            .getStory(input.slug, params)
            .then((res) => {
              return res as ISbStory<PageStoryblok>;
            })
            .catch((error) => {
              throw new TRPCError({
                message: "[CMS020] - Page Not Found",
                code: "NOT_FOUND",
                cause: error,
              });
            });
        } catch (error) {
          throw new TRPCError({
            message: "[CMS010] - Error fetching page",
            code: "NOT_FOUND",
            cause: error,
          });
        }
      },
      //
    ),
});
