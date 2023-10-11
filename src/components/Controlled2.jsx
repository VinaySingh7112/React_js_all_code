import React, { Component } from 'react';

class Controlled2 extends Component {
  render() {
    const { email, password, show } = this.props;
    return (
      <div>
        {show ? (
          <div className="card p-4 m-4 border-light">
            <h4 className="title">Email: {email}</h4>
            <h4 className="title">Password: {password}</h4>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Controlled2;
