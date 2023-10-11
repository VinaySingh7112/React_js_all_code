import React from 'react'
import Middle from './Middle'
import Child from './Child'
export default function Firstcontext({data,fun,name}) {
  return (
    <div>
      <Middle data={data} fun={fun} name={name}/>
      <div className='border m-5 p-3 bg-dark text-light'>
        <h1>hello Firstcontext bro {name}</h1>
        <Child data={data} fun={fun}/>
    </div>
    </div>
  )
}
