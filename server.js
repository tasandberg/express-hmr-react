var express = require('express')
var morgan = require('morgan')
var htmlString = require('./src/template')

var app = express()

app.use(morgan('dev'))
app.use('/', express.static('./dist'))
app.get('/', (req, res) => {
  res.send(htmlString())
})

app.listen(3000, () => console.log('Express Server listening on port 3000'))
