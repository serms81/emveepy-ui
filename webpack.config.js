var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      { test: /\.hbs$/,
        include: path.join(__dirname, 'src'),
        loader: 'handlebars-loader',
        options: {
          helperDirs: path.join(process.cwd(), "./js/helpers")
        }
      },
      { test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: true
      }
    }),
    new ExtractTextPlugin('styles.css')
  ]
}
