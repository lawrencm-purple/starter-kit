/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import path from "path";

// import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: [
      "images.unsplash.com",
      "a-ap.storyblok.com",
      "maps.googleapis.com",
      "via.placeholder.com",
    ],
  },
};

export default config;
