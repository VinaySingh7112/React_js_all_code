import React, { Component } from 'react'

 class Ne extends Component {
    constructor (props){
        super(props)
        this.state={
            
       
       count : fetch("https://dummyjson.com/products?skip=0&limit=2")
        .then((res) => res.json()).then((c) => {
            document.getElementById("products").innerHTML = c.products.map((v, i) => {
                return (`<div class="img__elev22">
                            <span class="background">
                            <a href="#" class="button">
                                <div >
                                    <svg>
                                        <rect x="0" y="0" fill="none" width="100%" height="100%" />
                                    </svg>
                                    <div class="border p-4 " style="width: 230px;height: 350px;">
                                        <div class="img__elec3">
                                            <img id="img__elec2" src="${v.images[0]}" width="179px" height="179px">
    
                                            </div>
                                        <div class="mt-4 text-center">
                                            <div>${v.brand} ${v.title} ${v.category}</div>
                                            <div>$${v.price}</div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
    
                            </span>
                        </div>`)
            }).join("")
        })
    } }
  render() {
    console.log("rendered")
    let click =()=>{
        this.setState(
            {count:this.state.count+1}
        )
    }


    return (
      <div>
        <h1> count :-{this.state.count}</h1>
        <div id="products" class="d-flex  card__one1 container-fluid "> </div>

        <button onClick={click}>click</button>
      </div>
    )
  }
}
export default Ne;


