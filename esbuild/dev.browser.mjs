import * as esbuild from "esbuild";

let ctx = await esbuild.context({
  entryPoints: ["src/index.ts"],
  target: "esnext",
  platform: "browser",
  format: "iife",
  bundle: true,
  minify: true,
  legalComments: "none",
  outfile: "dist/browser.min.js",
  logLevel: "info"
});

await ctx.watch();
