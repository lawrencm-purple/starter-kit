import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { env as authEnv } from "@com/auth/env";
import { vercel } from "@t3-oss/env-nextjs/presets";


export const env = createEnv({
  extends: [authEnv,vercel()],
    shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },
      server: {
    DATABASE_URL: z.string().url(),
  },
  client: {
    
  },
  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
skipValidation:
    !!process.env.CI || process.env.npm_lifecycle_event === "lint",
 
});
