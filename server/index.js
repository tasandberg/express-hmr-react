import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server';
import App from '../src/app.js'

const app = express()
const PORT = 3000

if (process.env.NODE_ENV !== 'production') {
  require('../dev-middleware')(app)
} else {
  app.use('/assets', express.static('dist'))
}

app.get('/', function(req, res) {
  res.send('<body><div id="root">Hello World?!</div><script src=\'assets/bundle.js\'></script></body>')
})

app.listen(PORT, () => `Express Server listening on ${PORT}`)
