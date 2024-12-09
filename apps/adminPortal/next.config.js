import path from "path";
import { fileURLToPath } from "url";
import createJiti from "jiti";

createJiti(fileURLToPath(import.meta.url))("./src/env");

console.log("process.env.NODE_ENV");
console.log(process.env.NODE_ENV);

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  transpilePackages: ["@com/api", "@com/auth", "@com/db", "@com/ui"],

  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  productionBrowserSourceMaps: true,
};

export default config;
