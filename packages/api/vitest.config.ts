import { defineConfig, mergeConfig } from "vitest/config";

export default defineConfig({
  // other config goes here
  test: {
    coverage: {
      provider: "istanbul", // or 'v8'
      include: ["src/routers/**"],
    },
    server: {
      deps: {
        inline: ["next"],
      },
    },
  },
});
