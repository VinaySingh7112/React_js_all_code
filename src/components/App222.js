import React,{useState,createContext} from 'react'
import Firstcontext from './Context/Firstcontext';

export let Data = createContext();
export default function App222() {

    const [name,setname]=useState("")
 
    let fun =(a)=>{
        setname(a)
    }
    // let data ={name:"Singh",age:23}
    let obj ={name:"vinay" ,age:23,fun}
    return (
    <>
        {/* <Firstcontext data={data} fun={fun} name={name}/> */}
        <Data.Provider value={obj} >
             <Firstcontext/>
        </Data.Provider>

    </>
  )
}
