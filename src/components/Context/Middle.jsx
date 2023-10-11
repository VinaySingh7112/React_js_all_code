import React,{useState,useContext} from 'react'
import Child from './Child'
import { Data } from '../../App'
export default function Middle({data,fun,name}) {
 let content =useContext(Data);
  return (
    <div className='border m-5 p-3 bg-primary'>
        <h1>hello Middle bro {name}</h1>
        <Child data={data} fun={fun}/>
        <h1>hello middle name is {content.name}</h1>
        <Data.Consumer>
         { (a)=>{
            return(
                  <>
                    
                    <h1>{a.name}</h1>
                    <h1>{a.age}</h1>
                  <button onClick={()=>{a.fun("vivek")}}>Middle</button>
                  </>
            )
         }

         }
        </Data.Consumer>
    </div>
  )
}
