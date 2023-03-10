"use strict";

var path = require("path");

var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    "static": "./dist"
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Restaurant Page"
  })],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true
  },
  module: {
    rules: [{
      test: /\.css$/i,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.(png|gif|svg|jpg|jpeg)$/i,
      type: "asset/resource"
    }]
  }
};