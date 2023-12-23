import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.tsx"],
  //tsconfig: "./tsconfig.json",
  sourcemap: true,
  dts: true,
  external: ["react", "react-dom"],
});
