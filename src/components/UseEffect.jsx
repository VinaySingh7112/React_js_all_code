import React,{useState,useEffect} from 'react'

export default function UseEffect() {
    const[count,setcount] =useState(0);
    const[num,setnum] =useState(0);
    const[name,setname] =useState('');

    useEffect(()=>{
        alert(count,num)
        localStorage.setItem('names',name)
        document.title="React App"+count

    },[count,num,name])
  return (
    <div>
        <input type="text" onChange={(e)=>{setname(e.target.value)}}/>
        <h1>count{count}</h1>
        <button onClick={()=>{setcount(count +1)}}>update</button>
        <h1>num{num}</h1>
        <button onClick={()=>{setnum(num +1)}}>update</button>
    </div>
  )
}
