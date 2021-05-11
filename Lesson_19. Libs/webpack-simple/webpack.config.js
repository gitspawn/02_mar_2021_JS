const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({ filename: "main.css" }),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      // Css
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
        ],
      },

      // Sass
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          "css-loader",
          "sass-loader",
        ],
      },
      { test: /\.hbs$/, exclude: /node_modules/, use: "handlebars-loader" }
    ],
  },
  // Минификатор
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  devServer: {
    open: true,
    watchOptions: {
      poll: true,
      ignored: "/node_modules/",
    },
  },
};
