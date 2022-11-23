import React, { Component } from 'react'

export class Controlling extends Component {
    state={
        name:"Inittial value"
    }
    uncontrolled=()=>{
        console.log(this._name.value)
    }
    changeState=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
  render() {
    return (
      <div>Controlling</div>
    )
  }
}

export default Controlling