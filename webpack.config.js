var webpack = require('webpack')
var path = require('path')

module.exports = {
  entry : './lesson7/index.jsx',
  output : {
    path : 'bundle',
    filename : 'bundle.js'
  },
  module : {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
        }
      }
    ]
  }
}
