import React, { Component } from 'react'
class CountDemo extends Component {
    handlea = (event) => {
        this.setState({
            mycount : this.state.mycount + 1
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            mycount:0
        }
    }
  render() {
    return (
      <>
        <button onClick={this.handlea}> Click Count {this.state.mycount}</button>
      </>
    )
  }
}

export default CountDemo
