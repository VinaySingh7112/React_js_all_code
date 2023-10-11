import React, { Component } from 'react';

class Idacontrolled1 extends Component {
  render() {
    const { email, password,deleted,index,updated} = this.props;
    return (
      <div>
           <div className="card position-relative bg-info" style={{width:"300px"}}>
          <div className="card p-4 m-4 border-primary position-relative bg-primary text-white "style={{width:"18rem"}}>
          <span className='bg-info  px-2 position-absolute' style={{cursor:'pointer',width:"fit-content" ,borderRadius:"20px",right:"5px",top:"5px",color:"black"}} onClick={()=>{deleted(index)}}>X</span>        
            <h4 className="card-title text-dark">Email-{email}</h4>
            <h6 className="card-text">Password-{password}</h6>
            <a href='#' onClick={()=>{updated(index)}} className='btn btn-info mt-4 update'>update</a>
           
          </div>
          </div>
      </div>
    );
  }
}

export default Idacontrolled1;
