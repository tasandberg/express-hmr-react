import React from 'react'
import { render } from 'react-dom'

const MyName = ({ name }) => <h1>{name}</h1>

const App = () => (
  <div>
    <MyName name="BB Steps Son!" />
  </div>
)

function appendAnchorElement() {
  const rootEl = document.createElement('div')
  rootEl.setAttribute('id', 'root')
  document.body.appendChild(rootEl)
}

appendAnchorElement()
render(<App />, document.getElementById('root'))
