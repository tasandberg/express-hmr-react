const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: {
    server: './server/index',
    vendor: ['react', 'react-dom', 'express']
  },
  watch: !isProduction,
  target: 'node',
  externals: [ nodeExternals() ],
  module: {
    rules: [
      { 
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin()
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js'
  }
}

if (!isProduction) {
  config.plugins.unshift(
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect=5353']
    })
  )
} else {
  config.plugins.unshift(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  )
  config.plugins.unshift(
    new webpack.optimize.UglifyJsPlugin()
  )
}

module.exports = config;
