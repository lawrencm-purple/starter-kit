import type { PrismaClient } from "@prisma/client";
import { describe, expect, test } from "vitest";
import { mockDeep } from "vitest-mock-extended";

import { createContextInner } from "../../src/context";
import { createCaller } from "../../src/root";
import db from "../db";

describe("post.getSecretMessage", () => {
  test("returns the secret message", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    const result = await caller.post.getSecretMessage();
    expect(result).toBe("you can now see this secret message!");
  });

  test("returns same message for authenticated users", async () => {
    const ctx = await createContextInner({
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

    const caller = createCaller({
      db: db,
      session: ctx.session,
      token: null,
    });

    const result = await caller.post.getSecretMessage();
    expect(result).toBe("you can now see this secret message!");
  });

  test("message is consistent across multiple calls", async () => {
    const ctx = await createContextInner({
      db: db,
      session: null,
    });

    const caller = createCaller({
      db: db,
      session: null,
      token: null,
    });

    const result1 = await caller.post.getSecretMessage();
    const result2 = await caller.post.getSecretMessage();
    const result3 = await caller.post.getSecretMessage();

    expect(result1).toBe(result2);
    expect(result2).toBe(result3);
  });
});
