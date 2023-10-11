

// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink,useNavigate } from 'react-router-dom';
import React from 'react';

function Nav1() {
    let Nav =useNavigate();
    let back=()=>{
        Nav(-1)
    }
    return (
        <Navbar className='position-fixed d-flex justify-content-between pe-3 ps-5 pt-2 pb-1 w-100 z-3' style={{ backgroundColor: "#dc4c3e", height:'45px' }}>
            <div className='pb-1'>
                <NavLink className="navbar-brand" to='/'><span class="bi bi-list fs-5 text-light"></span></NavLink>
                <NavLink className="navbar-brand" to='/'><span className='bi bi-house-door text-light'></span></NavLink>
                <input type="text" style={{ outline: 'none' }} className='opacity-50 d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded' placeholder="Search" />
            </div>
            <div className='d-flex pt-2'style={{paddingInlineStart:'0px'}}>
                <ul style={{paddingInlineStart:'0px'}}>
                    <NavLink  to='/'className='navbar-brand text-decoration-none text-light  align-items-center'>Home</NavLink>
                    <NavLink to='/about' className='navbar-brand text-decoration-none text-light  align-items-center'>About</NavLink>
                    <NavLink to='/contact' className='navbar-brand text-decoration-none text-light  align-items-center'> Contact </NavLink>
                </ul>
                <ul style={{paddingRight:'54px',paddingLeft:'54px'}}>
                <span className="bi bi-plus-lg text-light me-3 navbar-brand"></span>
                <span className="bi bi-question-circle text-light me-3 navbar-brand"></span>
                <span className="bi bi-bell text-light me-3 navbar-brand"></span>
                <span className="bi bi-person-circle text-light  navbar-brand"></span>
                 <span onClick={back} className="bi bi-arrow-left-short text-light  navbar-brand"></span>
               
                </ul>
               
            </div>


        </Navbar>
    );
}

export default Nav1;