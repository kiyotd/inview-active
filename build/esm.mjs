import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  target: 'esnext',
  platform: 'neutral',
  format: 'esm',
  bundle: true,
  minify: true,
  legalComments: 'none',
  outfile: 'dist/esm.min.js',
  logLevel: 'info',
});
