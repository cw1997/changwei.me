const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const fileName = '[id].[name].[hash]'

module.exports = {
  entry: [
    "babel-polyfill",
  ],
  node: {
    fs: 'empty',
    net:'empty',
    tls:'empty',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: '/node_modules/',
      },
    ],
  },
}
