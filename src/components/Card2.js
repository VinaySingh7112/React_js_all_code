import React, { Component } from 'react'

export default class Card2 extends Component {
    render() { 
        const {img ,title , id ,description,price, discount ,deleted ,index} = this.props ;
        return (
            <div>
                <div className="card position-relative" style= {{width: "18rem"}}> 
                
                   <span className='bg-white  px-2 position-absolute' style={{width:"fit-content" ,borderRadius:"20px",left:"5px",top:"5px"}}>{id}</span>
                   <span className='bg-white  px-2 position-absolute' style={{width:"fit-content" ,borderRadius:"20px",right:"5px",top:"5px"}} onClick={()=>{deleted(index)}}>X</span>
                    
                    {img ?<img src={img} className="card-img-top" width={"200px"} height={"200px"} alt="not found" />:"loading...."}
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>price : ${price}<span>{discount}%off</span></p>
                        <a href="/" className="btn btn-primary">Go somewhere</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}