const path = require('path')

const {merge: webpackMerge} = require("webpack-merge");

const webpackCommonConfig = require('./webpack.common.config')

const fileName = 'server-[name]'

module.exports = webpackMerge(webpackCommonConfig, {
  target: 'node',
  entry: {
    index: './server/index.jsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${fileName}.js`,
    chunkFilename: `${fileName}.chunk.js`,
    // if use cdn, remember adding publicPath
    // publicPath: 'https://cdn.example.com/assets/[hash]/',
    libraryTarget: 'commonjs2',
  },
  mode: 'development',
  // devtool: 'eval', // 'eval' is not supported by error-overlay-webpack-plugin
  plugins: [],
  // exclude: './public',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{
          loader: "css-loader",
        },],
        exclude: '/node_modules/',
      },
      {
        test: /\.s[ca]ss$/,
        use: [{
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
