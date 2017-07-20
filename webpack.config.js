var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');
const marked = require("marked"),
      renderer = new marked.Renderer();

var config = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      }
    ],
    rules: [{
      test: /\.md$/,
      use: [
        {
          loader: "html-loader"
        },
        {
          loader: "markdown-loader",
          options: {
            pedantic: true,
            renderer
          }
        }
      ]
    }]
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

// if (false) {
//   // If you want to extract to a file:
//   config.module.loaders.push(
//     { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
//   )
//   config.plugins.push(
//     new ExtractTextPlugin('styles.css')
//   )
// } else if (false) {
//   // If you want to include styles on main file
//   config.module.loaders.push(
//     { test: /\.scss$/, loader: 'style!css!sass' }
//   )
// }

module.exports = config
