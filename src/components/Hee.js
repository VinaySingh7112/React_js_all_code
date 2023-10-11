import React, { Component } from 'react'

class Hee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 20,
    };
  }

 decCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else {
      this.setState({ count: 0 });
    }
  };
  render(){
    return (
      <div>
        <h1> count :-{this.state.count}</h1>
      
        <button onClick={this.decCount}>click</button>
      </div>
    )
  }
}

export default Hee;




