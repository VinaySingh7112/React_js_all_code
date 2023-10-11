import React from 'react'

function uncontrolled() {
  let getdata = (e) => {
      e.preventDefault();
      console.log(
          e.target.email.value,
          e.target.password.value
      )
  }


  return (
    <div>
      <form className="m-auto w-25 shadow rounded p-5 border mt-4"onSubmit={getdata}>
      <h1>controlled</h1>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name='email'  />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label  className="form-label">Password</label>
          <input type="password" className="form-control" name="password"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>


    </div>
  )
}




export default uncontrolled