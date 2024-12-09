/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import path from "path";

import "./src/env.js";

import { hostname } from "os";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: "a-ap.storyblok.com",
      },
    ],
  },
};

export default config;
