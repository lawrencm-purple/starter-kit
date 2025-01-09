import type { PrismaClient } from "@prisma/client";
import { beforeEach, describe, expect, test } from "vitest";
import { mockDeep, mockReset } from "vitest-mock-extended";

import { createContextInner } from "../../src/context";
import { createCaller } from "../../src/root";
import db from "../db";

describe("post.getLatest", () => {
  beforeEach(() => {
    mockReset(db);
  });

  const mockPost = {
    id: 1,
    name: "test post",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    createdById: "1",
  };

  const createValidSession = () => ({
    user: {
      id: "1",
      family_name: "Flintstone",
      given_name: "Fred",
      roles: [],
      job_title: "",
    },
    expires: "",
  });

  test("returns latest post for authenticated user", async () => {
    db.post.findFirst.mockResolvedValue(mockPost);

    const ctx = await createContextInner({
      db: db,
      session: createValidSession(),
    });

    const caller = createCaller({
      db: db,
      session: ctx.session,
      token: null,
    });

    const result = await caller.post.getLatest();

    expect(db.post.findFirst).toHaveBeenCalledWith({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: "1" } },
    });
    expect(result).toEqual(mockPost);
  });

  test("returns null when no posts exist for user", async () => {
    db.post.findFirst.mockResolvedValue(null);

    const ctx = await createContextInner({
      db: db,
      session: createValidSession(),
    });

    const caller = createCaller({
      db: db,
      session: ctx.session,
      token: null,
    });

    const result = await caller.post.getLatest();

    expect(result).toBeNull();
  });

  test("returns null for unauthenticated user", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    const result = await caller.post.getLatest();

    expect(db.post.findFirst).toHaveBeenCalledWith({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: undefined } },
    });
    expect(result).toBeNull();
  });

  test("handles database errors gracefully", async () => {
    db.post.findFirst.mockRejectedValue(new Error("Database error"));

    const ctx = await createContextInner({
      db: db,
      session: createValidSession(),
    });

    const caller = createCaller({
      db: db,
      session: ctx.session,
      token: null,
    });

    await expect(caller.post.getLatest()).rejects.toThrow();
  });

  test("returns correct post when multiple posts exist", async () => {
    const latestPost = {
      ...mockPost,
      id: 2,
      createdAt: new Date("2024-01-02"),
    };

    db.post.findFirst.mockResolvedValue(latestPost);

    const ctx = await createContextInner({
      db: db,
      session: createValidSession(),
    });

    const caller = createCaller({
      db: db,
      session: ctx.session,
      token: null,
    });

    const result = await caller.post.getLatest();

    expect(result).toEqual(latestPost);
    expect(db.post.findFirst).toHaveBeenCalledWith({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: "1" } },
    });
  });

  test("returns null when session exists but user ID is missing", async () => {
    const invalidSession = {
      user: {
        // Missing id
        family_name: "Flintstone",
        given_name: "Fred",
        roles: [],
        job_title: "",
      },
      expires: "",
    };

    const ctx = await createContextInner({
      db: db,
      session: invalidSession,
    });

    const caller = createCaller({
      db: db,
      session: invalidSession,
      token: null,
    });

    const result = await caller.post.getLatest();

    expect(db.post.findFirst).toHaveBeenCalledWith({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: undefined } },
    });
    expect(result).toBeNull();
  });

  test("preserves ordering when posts have same creation date", async () => {
    const sameTimePost = {
      ...mockPost,
      id: 2,
    };

    db.post.findFirst.mockResolvedValue(sameTimePost);

    const ctx = await createContextInner({
      db: db,
      session: createValidSession(),
    });

    const caller = createCaller({
      db: db,
      session: ctx.session,
      token: null,
    });

    const result = await caller.post.getLatest();

    expect(result).toEqual(sameTimePost);
    expect(db.post.findFirst).toHaveBeenCalledWith({
      orderBy: { createdAt: "desc" },
      where: { createdBy: { id: "1" } },
    });
  });
});
