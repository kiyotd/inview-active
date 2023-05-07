import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["src/index.ts"],
  target: "esnext",
  platform: "neutral",
  format: "esm",
  bundle: true,
  minify: true,
  legalComments: "none",
  outfile: "dist/esm.min.js",
  logLevel: "info"
});

await ctx.watch();
