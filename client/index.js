import React from 'react'
import { hydrate } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app'

function renderApp() {
  hydrate(
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  )
}

renderApp()

if (module.hot) module.hot.accept('./app', () => renderApp())
