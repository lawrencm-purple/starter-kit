import { beforeEach, describe, expect, test } from "vitest";
import { mockReset } from "vitest-mock-extended";

import { createContextInner } from "../../src/context";
import { createCaller } from "../../src/root";
import db from "../db";

describe("post.create", () => {
  // Reset mocks before each test
  beforeEach(() => {
    mockReset(db);
  });

  // Helper function to create a valid session
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

  // Helper to set up context and caller
  const setupTest = async (
    session: {
      user: {
        id: string;
        family_name: string;
        given_name: string;
        roles: never[];
        job_title: string;
      };
      expires: string;
    } | null = createValidSession(),
  ) => {
    const ctx = await createContextInner({ db, session });
    const caller = createCaller({ db, session: ctx.session, token: null });
    return { ctx, caller };
  };

  test("successfully creates a post with valid input", async () => {
    const mockPost = {
      id: 1,
      name: "test post",
      createdAt: new Date(),
      updatedAt: new Date(),
      createdById: "1",
    };

    db.post.create.mockResolvedValue(mockPost);

    const { caller } = await setupTest();

    const input = { name: "test post" };
    const post = await caller.post.create(input);

    expect(db.post.create).toHaveBeenCalledWith({
      data: {
        name: "test post",
        createdBy: { connect: { id: "1" } },
      },
    });
    expect(post).toEqual(mockPost);
  });

  test("rejects unauthorized access (no session)", async () => {
    const { caller } = await setupTest(null);

    const input = { name: "test post" };

    await expect(caller.post.create(input)).rejects.toThrow(/UNAUTHORIZED/i);
  });

  test("handles database errors gracefully", async () => {
    db.post.create.mockRejectedValue(new Error("Database connection failed"));

    const { caller } = await setupTest();

    const input = { name: "test post" };

    await expect(caller.post.create(input)).rejects.toThrow();
  });

  test("rejects invalid input (empty name)", async () => {
    const { caller } = await setupTest();

    const input = { name: "" }; // Empty name should fail validation

    await expect(caller.post.create(input)).rejects.toThrow(/too_small/i);
  });

  test("handles unique constraint violations", async () => {
    db.post.create.mockRejectedValue(new Error("Unique constraint violation"));

    const { caller } = await setupTest();

    const input = { name: "test post" };

    await expect(caller.post.create(input)).rejects.toThrow();
  });

  test("creates post with maximum length name", async () => {
    const longName = "a".repeat(191); // Assuming 191 is max length, adjust based on your schema
    const mockPost = {
      id: 1,
      name: longName,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdById: "1",
    };

    db.post.create.mockResolvedValue(mockPost);

    const { caller } = await setupTest();

    const input = { name: longName };
    const post = await caller.post.create(input);

    expect(post).toEqual(mockPost);
  });

  test("preserves input name without trimming", async () => {
    const nameWithSpaces = "  test post  ";
    const mockPost = {
      id: 1,
      name: nameWithSpaces,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdById: "1",
    };

    db.post.create.mockResolvedValue(mockPost);

    const { caller } = await setupTest();

    const input = { name: nameWithSpaces };
    const post = await caller.post.create(input);

    expect(post.name).toBe(nameWithSpaces);
    expect(db.post.create).toHaveBeenCalledWith({
      data: {
        name: nameWithSpaces,
        createdBy: { connect: { id: "1" } },
      },
    });
  });
});
