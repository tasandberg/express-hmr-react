import React from 'react'
import { render } from 'react-dom'
import App from './src/app'

let count = 0

function appendAnchorElement() {
  count++
  const rootEl = document.createElement('div')
  const extra = document.createElement('h1')
  extra.textContent = 'what is uuuup ' + count.toString()
  rootEl.setAttribute('id', 'root')
  document.body.appendChild(rootEl)
  document.body.appendChild(extra)
}

appendAnchorElement()

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./src/app', () => {
    render(<App />, document.getElementById('root'))
  })
}
