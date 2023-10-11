import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function First() {
    let { cat, ind } = useParams()

    const [alldata, setalldata] = useState([])
    if (cat == "smartphones") {
        fetch('Mob.json')
            .then(response => response.json())
            .then(json => setalldata(json))
    }
    else if (cat == "laptops") {
        fetch('data.json')
            .then(response => response.json())
            .then(json => setalldata(json))
    }
    return (
        <div>
            <div className='card position-relative bg-primary text-white p-3' style={{ width: "18rem" }}>
                <span className="bg-info">X</span>
                <div className='card-body'>
                    <h5 className='card-title'>{cat}</h5>
                    <p className='card-text'>{ind}</p>
                    <button onClick={() => { alert("vinay") }}>view</button>
                    <a href="#" className='btn btn-primary'>Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default First;