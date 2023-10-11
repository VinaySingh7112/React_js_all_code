import React, { Component } from 'react'

export default class Looping extends Component {
    constructor(props){
        super(props)
        this.state={
            data:["vinay","singh","rohan","vivek","sohan","ankit"],
            count:0,
            names:[]
        }
    }
  render() {
    let change =()=>{
        if (this.state.count===5){
            this.setState({
                count:0
            })
        }else{
            this.setState({
                count:this.state.count +1
            })
        }
        this.setState({
            names:[...this.state.names,this.state.data[this.state.count]]
        })


    }
    return (
      <div>
           <button onClick={change}>change</button>
           <div className='d-flex' style={{flexWrap:'wrap'}}>
            {this.state.names.map((v,i)=>{
                return(
                    <div className='w-50 border p-3 bg-info m-auto d-flex justify-content-center' key={i}> 
                    <h1>{v}</h1>
                    </div>
                )
            })}
           </div>
      </div>
    )
  }
};
