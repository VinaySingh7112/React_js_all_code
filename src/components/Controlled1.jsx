import React, { Component } from 'react'

export default class Controlled1 extends Component {
  constructor(props){
    super(props)
    this.state={
      email:"vinay@gmail.com",password:"2344",show:false
    }
  }

  render() {

  const {email,password,show}=this.state;
  let emailchange=(e)=>{
    e.preventDefault();
    this.setState({
      email:e.target.value
    })
  }
  let passwordchange=(e)=>{
    e.preventDefault();
    this.setState({
      password:e.target.value
    })
  }
  let setdata=(e)=>{
    e.preventDefault()
    this.setState({show:true})
  }

    return (
      <div>
      
        <form className="m-auto w-25 shadow rounded p-5 border mt-4" onSubmit={setdata}>
          <h1>controlled</h1>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} onChange={emailchange} name='email' />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value={password} onChange={passwordchange} name="password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        {show?<div className="card">
          <h3 className="title">email:-{email}</h3>
          <h3 className="title">password:-{password}</h3>
        </div>:""}
      </div>
    )
  }
}
