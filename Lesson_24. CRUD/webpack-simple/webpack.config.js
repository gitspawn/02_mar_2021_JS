const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({ filename: "styles.css" }),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
  ],
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
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
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          "css-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          { loader: MiniCssExtractPlugin.loader, options: { esModule: false } },
          "css-loader",
          "sass-loader",
        ],
      },
      { test: /\.hbs$/, loader: "handlebars-loader" }
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },

  devServer: {
    open: true,
  },
};
