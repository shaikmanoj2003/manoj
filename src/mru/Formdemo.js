import React, { Component } from 'react'

class Formdemo extends Component {
    constructor(props){
        super(props)
        this.state = {
            un:"",
            br:"cse"
        }
        // this.state.br = ""
    }
    handleun = (event) => {
        // set the  username using handle function
        this.setState({
            un:event.target.value
        })
    }
    handlebr = (event) => {
        this.setState ({
            br:event.target.value
        })
    }
    handlesubmit = (event) => {
        alert(this.state.un + " " + this.state.br)

    }
  render() {
    return (
      <form onSubmit={this.handlesubmit}>
        <input type = "text" value = {this.state.un} onChange={this.handleun}></input> <br></br>
        <select onChange={this.handlebr} value={this.state.br}>
            <option> CSE</option>
            <option>AIML</option> 
            <option>DS</option>            
        </select>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Formdemo
