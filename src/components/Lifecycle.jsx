import React, { Component } from 'react'
import Styled from 'styled-components'
import  Idacontrolled from './Idacontrolled';
export default class Lifecycle extends Component {
    constructor(props){
        console.log("hello consturtor")
        super(props)
        this.state={
            count:0
        }
    }
    componentDidMount(){
       console.log('added')
    }
    componentWillUnmount(){
        console.log("removed")
    }
    componentDidUpdate(preprop,prevstate){
       console.log('hello update',preprop,prevstate)
    }
    shouldComponentUpdate(cp,cs){
        if(cs.count <=10){
            return true;
        }else{
            return false
        }
    }
  render() {
    let Btn =Styled.button `
     color:${props=>props.pri ? props.pri:'blue'};
     background-color:${props=>props.bg ? props.bg:'red'};
     border:none;border-radius:10px;padding:5px 10px;

    `
    let Newbtn =Styled(Btn)`
      margin:20px
    `
    console.log('hello render')
    return (
      <div>
         <Btn pri='red'bg='yellow'>styled button</Btn>
         <Btn pri='grey'bg='yellow'>styled button</Btn>
         <Btn pri='white'bg='black'>styled button</Btn>
         <Newbtn >styled button</Newbtn>
         <button onClick={()=>{this.setState({count:this.state.count+1})}}>change</button>
         <h1>{this.state.count}</h1>
         <div>
            {this.state.count%2===0 ? <Idacontrolled/> :'no data'}
         </div>
      </div>
    )
  }
}
