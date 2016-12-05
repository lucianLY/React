var webpack = require('webpack')
var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'bundle')
var APP_DIR = path.resolve(__dirname, 'js')

var config = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}
