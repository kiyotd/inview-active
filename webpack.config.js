const path = require('path');
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");

const mode = process.argv[process.argv.indexOf("--mode") + 1];

module.exports = {
  mode: mode,
  entry: './src/index.ts',
  resolve: {
    extensions: ['.ts', 'js']
  },
  module: {
    rules: [{test: /\.ts$/, loader: 'ts-loader'}]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "./"),
    library: 'kiyotd/scroll-toggle-active-class',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== "undefined" ? self : this'
  },
  plugins: [new BrowserSyncPlugin({
    host: "localhost",
    port: 3010,
    files: [
      `dist/**/*.html`,
      `dist/**/*.jpg`,
      `dist/**/*.png`,
      `dist/**/*.css`,
      `main.bundle.js`,
    ],
  }),
  ]
};
