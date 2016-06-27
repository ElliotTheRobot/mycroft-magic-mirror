var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: "./source/main.js",
  output: {
    path: "build",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./build",
    hot: true
  },
  target: 'node',
  plugins: [
        new CopyWebpackPlugin([
          { from: './source/electron.js' },
          { from: './source/assets/scripts/kill_descendant_processes.sh'}
        ],
        {
          ignore: [
            '*.txt'
          ],
          // By default, we only copy modified files during
          // a watch or webpack-dev-server build. Setting this
          // to `true` copies all files.
          copyUnmodified: true
        }
      )]

};
