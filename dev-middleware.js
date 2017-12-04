module.exports = function (app) {
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.js');

  const compiler = webpack(webpackConfig);
  console.log('Development: Applying webpackDevMiddleware')
  app.use(webpackDevMiddleware(compiler, {
    hot: true,
    filename: 'bundle.js',
    publicPath: '/assets/',
    stats: {
      colors: true,
    },
    historyApiFallback: true,
  }));

  console.log('Development: Applying webpackHotMiddleware')
  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}
