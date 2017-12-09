import React, { Component } from 'react'
import './style/main.scss'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  changeCount = diff => this.setState({ count: this.state.count + diff })

  render = () => (
    <div style={{ width: "100%", textAlign: 'center' }}>
      <h1>Express + HMR</h1>
      <h2>{this.state.count}</h2>
      <button onClick={() => this.changeCount(1)}>Up</button>
      <button onClick={() => this.changeCount(-1)}>Deeeyoown</button>
    </div>
  )
}
