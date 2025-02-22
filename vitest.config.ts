import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["**/*.spec.{ts,tsx}"],
    setupFiles: "./src/tests/setup.ts",
    globals: true,
    alias: {
      "@domain": "/src/domain",
      "@application": "/src/application",
      "@infrastructure": "/src/infrastructure",
    },
  },
});
