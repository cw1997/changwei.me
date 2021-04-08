const path = require('path')

const webpackMerge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const webpackCommonConfig = require('./webpack.common.config')

const fileName = '[name].[hash]'
const styleLoader = 'style-loader'

module.exports = webpackMerge(webpackCommonConfig, {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${fileName}.min.js`,
    // if use cdn, remember adding publicPath
    // publicPath: 'https://cdn.example.com/assets/[hash]/',
    // libraryTarget: 'umd',
  },
  mode: "development",
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'eval', // 'eval' is not supported by error-overlay-webpack-plugin
  devServer: {
    contentBase: "./dist",
    host: "127.0.0.1",
    port: 30000,
    historyApiFallback: true,
    overlay: {
      errors: true
    },
    open: false,
    inline: true,
    hot: true,
    compress: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
      title: '昌维的网站 - ChangWei.me [Development Mode]'
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: '',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: `${fileName}.css`,
      chunkFilename: `${fileName}.css`,
      ignoreOrder: false, // Enable to remove warnings about conflicting order      // hot reload
    }),
    new ErrorOverlayPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: styleLoader,
        }, {
          loader: "css-loader",
        },],
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ca]ss$/,
        use: [{
          loader: styleLoader,
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader',
            // options: { sourceMap: true }
        },],
        exclude: '/node_modules/',
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            //1024 == 1kb, pack to base64 inline url if size <- 10240 bytes
            limit: 10240,
            name: path.join(`${fileName}.[ext]`)
          },
        },],
        exclude: '/node_modules/',
      },
    ],
  },
})
