import React from 'react';

function CurdFunction1({ email, password, deleted, index, updated }) {
  return (
    <div>
      <div className="card position-relative">
        <div className="card p-3 border-primary position-relative bg-primary text-white" style={{ width: "19rem" }}>
          <span className='bg-info  px-2 position-absolute' style={{ cursor: 'pointer', width: "fit-content", borderRadius: "20px", right: "5px", top: "5px", color: "black" }} onClick={() => { deleted(index) }}>X</span>
          <h4 className="card-title text-dark">Email-{email}</h4>
          <h6 className="card-text">Password-{password}</h6>
          <a href='#' onClick={() => { updated(index) }} className='btn btn-info mt-4 update'>update</a>
        </div>
      </div>
    </div>
  );
}

export default CurdFunction1;
