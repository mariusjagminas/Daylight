const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/js/index.js",
    navigation: "./src/js/navigation.js"
  },

  devServer: {
    contentBase: "./dist"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
              // options...
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Dotenv(),
    new MiniCssExtractPlugin({
      filename: "styles.css"
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "app.html",
      template: "src/html/app.html"
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/html/index.html",
      excludeChunks: ["main"]
    })
  ]
};
