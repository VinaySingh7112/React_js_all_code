import React,{useState} from 'react'

export default function Hooks() {
    const [count,setcount]=useState(0);
    const [data,setData]=useState(['vinay','rohan']);
    const [obj,setobj]=useState({name:'hello'});
    console.log(obj)
  return (
    <div>
       <h1>hello functioncomponent {count} {obj.name}</h1>
       <button onClick={()=>{setcount(count+1)}}>change</button>
       <button onClick={()=>{setobj({...obj ,name:'harry'})}}>change</button>
       <h1>{data}</h1>
       <button onClick={()=>{setData([...data ,'harry'])}}>change</button>
    </div>
  )
}
