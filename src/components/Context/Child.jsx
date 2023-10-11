import React,{useState} from 'react'
import { Data } from '../../App'
export default function Child() {

  return (
    <div className='border m-3 bg-info'>
    {/* <div className='fs-1 text-center bold'>Vinay
          {data.name}
    </div>
    <div className='fs-1 text-center bold'>AGE :
          {data.age}
    </div>
    <div className='fs-1 text-center bold'>AGE :
          <input type="text" onChange={(e)=>{fun(e.target.value)}} />
    </div>
    
         <button onClick={()=>{fun("Rohan")}}>set</button> */}
   
     <Data.Consumer>
         { (a)=>{
            return(
                  <>
                    <h1>{a.name}</h1>
                    <h1>{a.age}</h1>
                  <button onClick={()=>{a.fun("Rohan")}}>child</button>
                  </>
            )
         }

         }
     </Data.Consumer>
    </div>
  )
}
