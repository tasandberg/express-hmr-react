const express = require('express');
const app = express();

if (process.env.NODE_ENV !== 'production') {
  require('./dev-middleware')(app)
} else {
  app.use('/assets', express.static('dist'))
}

app.get('/', function(req, res) {
  res.send('<body><div id="root">Hello World</div><script src=\'assets/bundle.js\'></script></body>');
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
