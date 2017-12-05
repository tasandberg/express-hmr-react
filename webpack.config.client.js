var webpack = require('webpack')
var path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
// const { NamedModulesPlugin } = webpack
// const { CommonsChunkPlugin } = webpack.optimize

const config = {
  entry: {
    app: ['./src/index.js'],
    vendor: ['react', 'react-dom']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
  config.entry.app.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
  config.entry.app.unshift('react-hot-loader/patch')
}

module.exports = config
