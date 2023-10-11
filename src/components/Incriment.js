import React, { Component } from 'react'

export default class Incriment extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 20,
        };
      }

      render() {
        console.log("rendered")
        let Increment=()=>{
            this.setState({ count: this.state.count + 1 });
        }
        let Decrement =()=>{
          
                if (this.state.count > 0) {
                    this.setState({ count: this.state.count - 1 });
                  } else {
                    this.setState({ count: 0 });
                  }
        }
    return (
        <div className='m-4'>
            <div className='container-fluid text-center shadow p-4 rounded'style={{width:"55%"}}>
          <h1> count :-{this.state.count}</h1>
         
          <div className='d-flex p-4'>
               <button onClick={Decrement} className='btn btn-info m-2'>Decrement</button>
               <button onClick={Increment} className='btn btn-info m-2'>Increment</button>
          </div>
        </div>
        </div>
      )
  }
}
   
    