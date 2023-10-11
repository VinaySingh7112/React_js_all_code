import React, { Component } from 'react'

export default class  extends Component {
    constructor(props){
        super(props)
        this.state={
            data:0
        }
    }
  render() {
    return (
      <div>
        <button onClick={()=>{this.setState({data:this.state.data +1})}}>inc</button>
        <h2>{this.state.data}</h2>
        <button onClick={this.state.data > 0 ? ()=>{this.setState({data:this.state.data -1 })}:()=>{ }}>dec</button>
      </div>
    )
  }
}
