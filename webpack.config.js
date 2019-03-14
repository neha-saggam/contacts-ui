const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

const indexCss = new ExtractTextWebpackPlugin("src/index.css");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
    devtool: "eval",
    entry: "./src/index.js",
  output: {
    filename: "[name].js",
    path: path.resolve(path.join(__dirname, "./dist")),
  },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: "[name]_[local]_[hash:base64]",
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlPlugin,  new webpack.HotModuleReplacementPlugin()],
    devServer: {
    contentBase: './dist',
        hot: true
    }
};
