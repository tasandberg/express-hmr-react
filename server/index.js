import express from 'express'
import React from 'react'
import devMiddleware from './dev-middleware'
import { renderToString } from 'react-dom/server'
import App from '../src/app.js'
import htmlPage from '../src/template.js'

const app = express()
const PORT = 3000

if (process.env.NODE_ENV !== 'production') {
  devMiddleware(app)
} else {
  app.use('/assets', express.static('dist'))
}

app.get('/', function(req, res) {
  const initialPage = htmlPage(
    renderToString(<App />)
  )
  
  res.send(initialPage)
})

app.listen(PORT, () => `Express Server listening on ${PORT}`)
