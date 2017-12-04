import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      count: 0
    }
  }

  changeCount = diff => this.setState({ count: this.state.count + diff })

  render = () => (
    <div>
      <h1>BB Steps Son!!</h1>
      <h1>{this.state.count}</h1>
      <button onClick={() => this.changeCount(1)}>Up</button>
      <button onClick={() => this.changeCount(-1)}>Deeeyoown</button>
    </div>
  )
}
