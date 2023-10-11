import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Inabout() {
 
  return (
    <div style={{paddingTop:'134px'}}>
      <button onClick={()=>{Nav(-1)}}>back</button>
      
    <div className='fs-4 d-flex justify-content-center 'style={{fontWeight:'bold'}}>
      AboutTodo
      </div>
      <NavLink to='/about/first' className="m-5">first about</NavLink>
      <NavLink to='/about/second'>second about</NavLink>
      <NavLink to='/about/prodect'className="m-5">Prodect</NavLink>
      <Outlet/>
     <div onChange={date}></div>
  </div>
  )
}
