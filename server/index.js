import express from 'express'
import morgan from 'morgan'
import React from 'react'
import devMiddleware from './dev-middleware'
import { renderToString } from 'react-dom/server'
import App from '../src/app.js'
import htmlPage from '../src/template.js'

const isProduction = process.env.NODE_ENV === 'production'
const app = express()
const PORT = 3000

if (!isProduction) {
  devMiddleware(app)
} else {
  app.use('/assets', express.static('dist'))
}

app.use(morgan('dev'))

app.get('/', function(req, res) {
  const initialPage = htmlPage(
    renderToString(<App />)
  )
  
  res.send(initialPage)
})

app.listen(PORT, () => console.log(`Express Server listening on ${PORT}`))
