const path = require('path')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const fileName = '[id].[name].[hash]'

module.exports = {
  entry: [
    "babel-polyfill",
  ],
  node: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
    }
  },
  devtool: 'eval-source-map',
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
