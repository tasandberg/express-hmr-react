const webpack = require('webpack')
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const StartServerPlugin = require('start-server-webpack-plugin')

module.exports = {
  entry: ['./server/index'],
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
      nodeArg: '--inspect'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env": { BUILD_TARGET: JSON.stringify("server") }
    })
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'server.js'
  }
}
