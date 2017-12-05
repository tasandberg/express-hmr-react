var webpack = require('webpack')
var path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
// const { NamedModulesPlugin } = webpack
// const { CommonsChunkPlugin } = webpack.optimize

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};

if (!isProduction) {
  // Do dev stuff
  config.entry.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
  config.entry.unshift('react-hot-loader/patch')
}

module.exports = config
