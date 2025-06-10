
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,                // 👈 Add this rule
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
        },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}
    ],
  },
};