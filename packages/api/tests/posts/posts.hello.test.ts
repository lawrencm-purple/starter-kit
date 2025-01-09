import type { PrismaClient } from "@prisma/client";
import type { inferProcedureInput } from "@trpc/server";
import { describe, expect, test } from "vitest";
import { mockDeep } from "vitest-mock-extended";

import { createContextInner } from "../../src/context";
import { AppRouter, createCaller } from "../../src/root";
import db from "../db";

describe("post.hello", () => {
  test("returns correct greeting with basic input", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    type Input = inferProcedureInput<AppRouter["post"]["hello"]>;
    const input: Input = { text: "World" };

    const result = await caller.post.hello(input);
    expect(result).toEqual({ greeting: "Hello World" });
  });

  test("handles empty string input", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    const input = { text: "" };
    const result = await caller.post.hello(input);
    expect(result).toEqual({ greeting: "Hello " });
  });

  test("handles special characters in input", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    const input = { text: "!@#$%^&*()" };
    const result = await caller.post.hello(input);
    expect(result).toEqual({ greeting: "Hello !@#$%^&*()" });
  });

  test("handles long string input", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    const longText = "a".repeat(1000);
    const input = { text: longText };
    const result = await caller.post.hello(input);
    expect(result).toEqual({ greeting: `Hello ${longText}` });
  });

  test("rejects missing text field", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    // @ts-expect-error - Testing invalid input
    await expect(caller.post.hello({})).rejects.toThrow();
  });

  test("rejects non-string input", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    // @ts-expect-error - Testing invalid input type
    await expect(caller.post.hello({ text: 123 })).rejects.toThrow();
  });

  test("works with both authenticated and unauthenticated users", async () => {
    // Test unauthenticated
    const unauthCtx = await createContextInner({
      db: db,
      session: null,
    });

    const unauthCaller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    // Test authenticated
    const authCtx = await createContextInner({
      db: db,
      session: {
        user: {
          id: "1",
          family_name: "Flintstone",
          given_name: "Fred",
          roles: [],
          job_title: "",
        },
        expires: "",
      },
    });

    const authCaller = createCaller({
      db: db,
      session: authCtx.session,
      token: null,
    });

    const input = { text: "Test" };
    const unauthResult = await unauthCaller.post.hello(input);
    const authResult = await authCaller.post.hello(input);

    expect(unauthResult).toEqual(authResult);
    expect(unauthResult).toEqual({ greeting: "Hello Test" });
  });
});
