var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

var config = {
  context: __dirname + '/src',
  entry: './main.js',
  output: {
    path: __dirname + '/dist/assets/',
    publicPath: '/assets/',
    filename: 'scripts.js'
  },
  module: {
    loaders: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {
        warnings: true
      }
    })
  ]
}

if (true) {
  // If you want to extract to a file:
  config.module.loaders.push(
    { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!sass') }
  )
  config.plugins.push(
    new ExtractTextPlugin('styles.css')
  )
} else {
  // If you want to include styles on main file
  config.module.loaders.push(
    { test: /\.scss$/, loader: 'style!css!sass' }
  )
}

module.exports = config
