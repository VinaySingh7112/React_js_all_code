import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom'

export default function MMobile() {
    const [data, setdata] = useState([]);
    let Nav = useNavigate()
    fetch('Mob.json')
        .then(response => response.json())
        .then(json => setdata(json));
    let fun = (category, index) => {
        Nav(`/first/${category}/${index}`)
    }
    return (
        <div>
            {data.map((v, i) => {
                return (
                    <>
                        <div className='card position-relative bg-primary text-white p-3'style={{width:"18rem"}}>
                            <span className="bg-info">X</span>
                            <div className='card-body'>
                                <h5 className='card-title'>{v.category}</h5>
                                <p className='card-text'>{v.id}</p>
                                <button onClick={()=>{fun(v.category,v.brand)}}>view</button>
                                <a href="#" className='btn btn-primary'>Go somewhere</a>
                            </div>
                        </div>
                    </>
                )
            })}

        </div>
    )
}
