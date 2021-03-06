const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require("path");
console.log(__dirname);
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: "Production",
      template: "./src/index.html",
      filename: "./index.html",
    }),
  ],
  output: {
    publicPath: `/`,
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      pages: path.resolve(__dirname, "./src/pages/"),
      css: path.resolve(__dirname, "src/css/"),
      img: path.resolve(__dirname, "src/img/"),
      utils: path.resolve(__dirname, "src/utils/"),
    },
  },
};
