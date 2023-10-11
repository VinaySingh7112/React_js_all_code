import React, { useState } from 'react'

export default function HookLogin() {

    const [name, setName] = useState("");
    const [number, setNumber] = useState( );
    const [data, setData] = useState([]);
    let adddata =(e)=>{
        e.preventDefault();
        let obj ={name,number};
        setData([...data,obj])
    }
    
    return (
        <div className='m-auto w-50 bg-info p-5'>
             <form  className='form'onSubmit={adddata}><br /><br />
              <label >name</label><br />
              <input type="text" name="" id="" value={name} onChange={(e)=>{setName(e.target.value)}} />
              <label >Phone number</label><br />
              <input type="text" name="" id="" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
             <button type='submit'>submit</button>
             </form>
        </div>
    )
}
