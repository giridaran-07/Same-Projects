import React, { Component } from 'react'
import { ReactDOM } from 'react'
export default class Componentdidcount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         myfavouritecolor:"red"
      }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({myfavouritecolor:"yellow"})
        },2000)
    }
  render() {
    return (
      <div>
        <h1>My favourite color is {this.state.myfavouritecolor}</h1>
      </div>
    )
  }
}
