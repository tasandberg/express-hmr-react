const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
  entry: {
    server: './server/index',
    vendor: ['react', 'react-dom', 'express']
  },
  watch: true,
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
    new StartServerPlugin({
      name: 'server.js',
      nodeArgs: ['--inspect']
    }),
    new webpack.NamedModulesPlugin(),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: '[name].js'
  }
}
