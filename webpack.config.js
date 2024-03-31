const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects CSS into the DOM
          "css-loader", // Interprets @import and url() like import/require() and resolves them
          "sass-loader", // Compiles Sass to CSS
          {
            loader: "resolve-url-loader", // Resolves relative paths in url() statements based on the original source file
            options: {},
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
