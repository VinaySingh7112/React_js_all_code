import React, { Component } from 'react';
import Controlled2 from './Controlled2';

class Controlled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'vinay@gmail.com',
      password: '2344',
      show: false,
      cartCount: 0,
      carts: [],
      showpass:false
    };
  }

  emailchange = (e) => {
    e.preventDefault();
    this.setState({
      email: e.target.value,
    });
  };

  passwordchange = (e) => {
    e.preventDefault();
    this.setState({
      password: e.target.value,
    });
  };

  setdata = (e) => {
    e.preventDefault();
    this.setState({ show: true });
    const { cartCount, carts } = this.state;
    const newCart = (
      <div key={cartCount} className=" shadow ">
        <Controlled2 email={this.state.email} password={this.state.password} show={this.state.show} />
      </div>
    );
    this.setState({
      cartCount: cartCount + 1,
      carts: [...carts, newCart],
    });
  };
  render() {
    const { email, password,showpass} = this.state;
    
    return (
      <div>
        <form className="m-auto w-25 shadow rounded p-5 border mt-4" onSubmit={this.setdata}>
          <h1>Controlled</h1>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" value={email} onChange={this.emailchange} name="email" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type={showpass ? "text":"password"} className="form-control" value={password} onChange={this.passwordchange} name="password" />
            <button type='button' onClick={()=>{this.setState({showhide:!showpass})}} className={showpass ?"btn btn-danger":"btn btn-primary"}>{showpass ?"hidepassword":"showpassword"}</button>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className='m-4'>
          
          <div id="cartContainer" className='gap-4'>{this.state.carts}</div>
        </div>
      </div>
    );
  }
}

export default Controlled;
