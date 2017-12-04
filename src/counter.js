import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()

    this.state = {
      count: 33
    }
  }

  changeCount = diff => this.setState({ count: this.state.count + diff })

  render = () => (
    <div>
      <p>Ma fuckin state remainz unchanged dawg</p>
      <h1>{this.state.count}</h1>
      <button onClick={() => this.changeCount(1)}>Up</button>
      <button onClick={() => this.changeCount(-1)}>Dawn</button>
    </div>
  )
}
