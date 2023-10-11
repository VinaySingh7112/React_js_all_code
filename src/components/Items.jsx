import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Items({show, change}) {
let Nav =useNavigate();
let back =(a,b)=>{
  Nav(`/view/${a}/${b}`)
}
  return (
    <div>
         <h1>items component</h1>
         <div className='card w-50 bg-info border' onClick={()=>{back("laptops","harry")}}>first</div>
         <div className='card w-50 bg-info border' onClick={()=>{back("smartphones","elon")}}>second</div>
         <div className='card w-50 bg-info border' onClick={()=>{back("skincare","cingh")}}>third</div>
    </div>
  )
}
