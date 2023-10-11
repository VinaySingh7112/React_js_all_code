import React from 'react'
function About(){
    let my ={
        color:"yellow",backgroundColor:"green"
    }
    return (
        <div style={my}>
            <h1>
                hello about component
            </h1>
            <div>
               <h1>Hello, world!</h1>
               <h2>It is {new Date().toLocaleTimeString()}.</h2>
           </div>
      
        </div>
    )
}
export default About;