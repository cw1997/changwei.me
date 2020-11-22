
module.exports = {
  presets: [
    // "@babel/preset-env",
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
        "corejs": "2",
      }
    ],
    "@babel/react",
    "@babel/typescript",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
  ],
  exclude: [/node_modules/],
}
