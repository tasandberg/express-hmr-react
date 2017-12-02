var webpack = require('webpack')
var path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { NamedModulesPlugin } = webpack
const { CommonsChunkPlugin } = webpack.optimize

module.exports = {
  devtool: 'inline-cheap-source-map',
  entry: {
    reactHot: 'react-hot-loader/patch',
    app: path.resolve(__dirname, 'index.js'),
    vendor: ['react', 'react-dom']
  },
  plugins: [
    new NamedModulesPlugin(),
    new HTMLWebpackPlugin({ title: 'Bbsteps Yall' }),
    new CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
}
