import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      react: require.resolve("react"),
      "react-dom": require.resolve("react-dom"),
    },
  },
});
