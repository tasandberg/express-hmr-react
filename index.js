import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
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

function renderApp() {
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

appendAnchorElement()

renderApp()

if (module.hot) module.hot.accept('./src/app', () => renderApp())
