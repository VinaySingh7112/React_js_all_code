import React, { Component } from 'react';

class Idacontrolled1 extends Component {
  render() {
    const { email6, istate,description, deleted, index, updated ,images } = this.props;
    return (
      <tr>
        <th scope="row">{index}</th>
        <th>
          <img src={`https://source.unsplash.com/random/?${images}`}style={{ width: "132px", height: "85px" }} alt="" className='mb-1' />
        </th>
        <td>{email6}</td>
        <td>{istate}</td>
        <td>{description}</td>
        <td>
            <a href='#' onClick={() => { updated(index) }} className='btn btn-info  update'>upd</a>
            <button className='bg-info btn btn-info m-2' style={{ cursor: 'pointer'  }} onClick={() => { deleted(index) }}>del</button>
        </td>
      </tr>



    );
  }
}

export default Idacontrolled1;
