import React,{Component} from 'react'
class Home extends Component{
    render(){
        let home={
            color:"black",backgroundColor:"white"
        }
        return(
            <>
            <h1 style={home}>hello Home page</h1>
             <p style={{color:"gray" ,backgroundColor:"white"}}>hello i am vinay singh</p>
            
            </>
        )
    }
}
export default Home;
