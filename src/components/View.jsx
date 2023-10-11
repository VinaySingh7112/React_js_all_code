import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
export default function View({ show, change }) {
    const [data, setdata] = useState([])
    let {id ,name} =useParams();
    useEffect(() => {
        fetch("https://dummyjson.com/products?&limit=100")
            .then((res) => { return res.json() })
            .then((result) => {
                setdata(result.products)
            })
    }, [])
    return (
        <div style={{paddingTop:"70px"}}>
            <h1>view component</h1>
           
            <div className="d-flex flex-wrap">
                {data.map((v, i) => {
                
                    if (id ? v.category == id : true) {
                        return (
                            <>
                               <div key={i}className='card position-relative bg-primary text-white p-3'style={{width:"18rem"}}>
                                <div className='card-body'>
                                    <img src={v.thumbnail} width={"100px"} alt="" />
                                    <h5 className='card-title'>{v.brand}</h5>
                                    <p className='card-text'>{v.category}</p>
                                    <p className='card-text'>{v.price}</p>
                                    <p className='card-text'>{v.description}</p>
                                    <a href="#" className='btn btn-primary'>go somewhere</a>
                                    


                                </div>
                               </div>
                            </>
                        )
                    }
                 
                 
                })}
            </div>
        </div>
    )
}
