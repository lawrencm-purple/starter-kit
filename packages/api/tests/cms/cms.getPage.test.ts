import type { PageStoryblok } from "@com/storyblok/types";
import type { ISbStory } from "@storyblok/react";
import * as storyblok from "@com/storyblok";
import { TRPCError } from "@trpc/server";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { mockDeep } from "vitest-mock-extended";

import { createContextInner } from "../../src/context";
import { createCaller } from "../../src/root";
import db from "../db";

const mockStoryblokApi =
  mockDeep<ReturnType<typeof storyblok.getStoryblokApi>>();

vi.mock("@com/storyblok", () => ({
  getStoryblokApi: vi.fn(() => mockStoryblokApi),
}));

describe("CMS Router", () => {
  let ctx: Awaited<ReturnType<typeof createContextInner>>;
  let caller: ReturnType<typeof createCaller>;

  beforeEach(async () => {
    vi.clearAllMocks();
    ctx = await createContextInner({
      session: null,
      db: db,
    });
    caller = createCaller({
      db: ctx.db,
      session: ctx.session,
      token: "",
    });
  });

  describe("getPage", () => {
    test("successfully retrieves a page", async () => {
      mockStoryblokApi.getStory.mockResolvedValueOnce({
        data: {
          cv: 1,
          links: [],
          rels: [],
          story: {
            id: 123,
            uuid: "abc-123",
            name: "Test Page",
            slug: "test-page",
            full_slug: "test-page",
            content: {
              _uid: "page-123",
              component: "page",
              title: "Test Page Title",
              description: "Test page description",
              body: [],
            },
            created_at: "2024-01-01",
            published_at: "2024-01-01",
            first_published_at: "2024-01-01",
            alternates: [],
            group_id: "group-123",
            lang: "en",
            meta_data: {},
            sort_by_date: null,
            tag_list: [],
            translated_slugs: [],
            parent_id: 0,
            position: 0,
          },
        },
        headers: {},
      });

      const result = await caller.cms.getPage({ slug: "test-page" });

      expect(result.data.story.content.title).toBe("Test Page Title");
      expect(mockStoryblokApi.getStory).toHaveBeenCalledWith("test-page", {
        version: "draft",
      });
    });

    test("throws validation error for empty slug", async () => {
      await expect(caller.cms.getPage({ slug: "" })).rejects.toThrow(
        "Slug cannot be empty",
      );
    });

    test("throws NOT_FOUND when Storyblok returns 404", async () => {
      mockStoryblokApi.getStory.mockRejectedValueOnce({
        status: 404,
        message: "Story not found",
      });

      await expect(
        caller.cms.getPage({ slug: "non-existent-page" }),
      ).rejects.toThrow(
        expect.objectContaining({
          code: "NOT_FOUND",
          message: "[CMS020] - Page Not Found",
        }),
      );
    });

    test("throws NOT_FOUND on general Storyblok API error", async () => {
      mockStoryblokApi.getStory.mockRejectedValueOnce(new Error("API Error"));

      await expect(caller.cms.getPage({ slug: "test-page" })).rejects.toThrow(
        expect.objectContaining({
          code: "NOT_FOUND",
          message: "[CMS020] - Page Not Found",
        }),
      );
    });

    test("throws NOT_FOUND when getStoryblokApi throws", async () => {
      vi.mocked(storyblok.getStoryblokApi).mockImplementationOnce(() => {
        throw new Error("Failed to initialize Storyblok API");
      });

      await expect(caller.cms.getPage({ slug: "test-page" })).rejects.toThrow(
        expect.objectContaining({
          code: "NOT_FOUND",
          message: "[CMS010] - Error fetching page",
        }),
      );
    });

    test("successfully handles page with minimal content", async () => {
      mockStoryblokApi.getStory.mockResolvedValueOnce({
        data: {
          cv: 1,
          links: [],
          rels: [],
          story: {
            id: 456,
            uuid: "def-456",
            name: "Minimal Page",
            slug: "minimal-page",
            full_slug: "minimal-page",
            content: {
              _uid: "minimal-123",
              component: "page",
            },
            created_at: "2024-01-01",
            published_at: null,
            first_published_at: undefined,
            alternates: [],
            group_id: "group-456",
            lang: "en",
            meta_data: null,
            sort_by_date: null,
            tag_list: [],
            translated_slugs: [],
            parent_id: 0,
            position: 0,
          },
        },
        headers: {},
      });

      const result = await caller.cms.getPage({ slug: "minimal-page" });

      expect(result.data.story.content.component).toBe("page");
      expect(result.data.story.published_at).toBeNull();
    });

    test("handles malformed response from Storyblok", async () => {
      mockStoryblokApi.getStory.mockResolvedValueOnce({
        data: {
          story: {
            id: 789,
            content: null,
          },
        },
        headers: {},
      } as any);

      const result = await caller.cms.getPage({ slug: "malformed-page" });

      expect(result.data.story.content).toBeNull();
    });
  });
});
