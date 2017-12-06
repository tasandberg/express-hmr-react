var webpack = require('webpack')
var path = require('path')
const isProduction = process.env.NODE_ENV === 'production'
// const { NamedModulesPlugin } = webpack
const { CommonsChunkPlugin } = webpack.optimize

const config = {
  entry: {
    app: ['./src/index.js'],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', minChunks: Infinity }),
    new webpack.NoEmitOnErrorsPlugin(),

  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};

if (!isProduction) {
  // Do dev stuff
  config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
  config.devtool = 'cheap-eval-source-map',
  config.entry.app.unshift('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000')
  config.entry.app.unshift('react-hot-loader/patch')
  config.entry.vendor.unshift('react-hot-loader')
} else {
  config.plugins.unshift(
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  )
}

module.exports = config
