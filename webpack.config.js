var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});
var webpack = require('webpack');
module.exports = {
  entry: [
    './app/index.jsx'
  ],
  module: {
    loaders: [
      {test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.css$/, loader: "style-loader!css-loader"},
      { test: /\.(png|jpg)$/, loader: 'file-loader'},  // todo switch back to url-loader
      { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf$/,    loader: "file-loader" },
      { test: /\.eot$/,    loader: "file-loader" },
      { test: /\.svg$/,    loader: "file-loader" }
    ]
  },
  output: {
    filename: "index.js",
    path: __dirname + '/dist'
  },
  plugins: [HTMLWebpackPluginConfig]
};
