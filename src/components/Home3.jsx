import React, { Component } from 'react';
import Card from './Card2';

export default class Home3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      alldata:""
    };
    fetch(`https://dummyjson.com/products?&limit=100`).then((res) => {return res.json()})
    
    .then((result) => {
      this.setState({ alldata: result.products });
    });
  }




  render() {
    const { data} = this.state;
    let getdata=()=>{
      this.setState({data:this.state.alldata})
    }

  
    

    let deleted = (i) => {
      
      let copy = data;
      copy.splice(i, 1);
      this.setState({
        data: copy,
      });
    };
    let laptops= async(e)=>{
      e.preventDefault();
      let a='laptops';
      await this.setState({
        data:this.state.alldata.filter((v)=>{
          return v.category === a
        })
      })
    }
    let smartphones= async(w)=>{
      w.preventDefault();
      let a='smartphones';
      await this.setState({
        data:this.state.alldata.filter((v)=>{
          return v.category === a
        })
      })
    }
    let fragrances= async(q)=>{
      q.preventDefault();
      let a='fragrances';
      await this.setState({
        data:this.state.alldata.filter((v)=>{
          return v.category === a
        })
      })
    }
    let skincare= async(q)=>{
      q.preventDefault();
      let a='skincare';
      await this.setState({
        data:this.state.alldata.filter((v)=>{
          return v.category === a
        })
      })
    }
    let groceries= async(q)=>{
      q.preventDefault();
      let a='groceries';
      await this.setState({
        data:this.state.alldata.filter((v)=>{
          return v.category === a
        })
      })
    }
    

    return (
      <>
      
         <button onClick={smartphones}className="btn btn-dark">smartphones</button>
          <button onClick={laptops} className="btn btn-primary">laptops</button>
          <button onClick={skincare} className="btn btn-dark">skincare</button>
          <button onClick={fragrances} className="btn btn-primary">fragrances</button>
          <button onClick={groceries}className="btn btn-dark">groceries</button>
          {/* <form onClick={click}>
           <input type="button" name='smartphones'value="smartphones" />
           <input type="button" value="smartphones"name='smartphones' />
          </form> */}
          <div>
              <div className='w-100  m-auto d-flex justify-content-evenly p-5 flex-wrap' style={{ gap: '20px' }}>
                {data
                  ? data.map((v, i) => {
                      return (
                        <div key={i}>
                          <Card id={v.id} price={v.price} discount={v.discountPercentage} title={v.title} description={v.description} img={v.thumbnail} deleted={deleted} index={i} />
                        </div>
                      );
                    })
                  : 'loading..'}
              </div>
             
          </div>
        
      </>
    );
  }
}
