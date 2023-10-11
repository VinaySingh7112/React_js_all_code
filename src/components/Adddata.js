import React, { Component } from 'react'

export default class Adddata extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[{name:"vinay",age:33}],
            count:0
        }
    }
  render() {
    let change=()=>{
        let user = prompt();
        let age= Number(prompt())
        this.setState({data:[...this.state.data,{name:user,age:age}]
        ,count:this.state.count+1
        })

    }
    return (
      <div>
          {console.log(this.state)}
          <button onClick={change}>add</button>
          {this.state.data.map((value,index)=>{
            return(
                <div key={index}>
                    <h1>hello :{value.name}</h1>
                    <h1>age:{value.age}</h1>

                </div>
            )
          }
          )}
      </div>
    )
  }
}
