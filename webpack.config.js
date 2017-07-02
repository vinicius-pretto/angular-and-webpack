const { resolve } = require('path');
const webpack = require('webpack');

let webpackConfig = {
  context: resolve('app'),
  entry: './index.js',
  output: {
    path: resolve('app'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './app',
    inline: true,
    port: 3000
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'ng-annotate-loader!babel-loader',
        exclude: /node_modules/ 
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [

  ] 
}

if (process.env.NODE_ENV === 'production') {
  webpackConfig.output.path = resolve('dist');
  webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = webpackConfig;