const path = require('path')

const webpackMerge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const webpackCommonConfig = require('./webpack.common.config')

const fileName = '[name].[hash].min'
const styleLoader = MiniCssExtractPlugin.loader

module.exports = webpackMerge(webpackCommonConfig, {
  entry: {
    index: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${fileName}.js`,
    chunkFilename: `${fileName}.chunk.js`,
    // if use cdn, remember adding publicPath
    // publicPath: 'https://cdn.example.com/assets/[hash]/',
  },
  mode: 'production',
  // TODO: set to cheap-module-source-map on prod env
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'cheap-module-source-map',
  // devtool: 'eval', // 'eval' is not supported by error-overlay-webpack-plugin
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
      title: `昌维的网站 - ChangWei's HomePage`,
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
      PUBLIC_URL: '',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: `${fileName}.css`,
      chunkFilename: `${fileName}.chunk.css`,
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new ErrorOverlayPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: styleLoader,
          options: {
            publicPath: '/public/static/',
          },
        }, {
          loader: "css-loader",
        },],
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ca]ss$/,
        use: [{
          loader: styleLoader,
          options: {
            publicPath: '/public/static/',
          },
        }, {
          loader: 'css-loader',
        }, {
          loader: 'sass-loader'
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
            name: path.join(`img/${fileName}.[ext]`)
          },
        },],
        exclude: '/node_modules/',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: path.join(`font/${fileName}.[ext]`)
          },
        },],
        exclude: '/node_modules/',
      },
    ],
  },
})
