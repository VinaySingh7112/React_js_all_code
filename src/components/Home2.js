import React, { Component } from 'react';
import Card from './Card2';

export default class Home2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      alldata:""
    };
    fetch(`https://dummyjson.com/products?&limit=99`).then((res) => {return res.json()})
    
    .then((result) => {
      this.setState({ alldata: result.products });
    });
  }




  render() {
    const { data } = this.state;
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
    let search= async(e)=>{
      e.preventDefault();
      let a=e.target.search.value;
      await this.setState({
        data:this.state.alldata.filter((v)=>{
          return v.category === a
        })
      })
    }

    return (
      <>
       <form onSubmit={search}>
           <input type="text" name='search' />
           <input type="submit" value="search" />
       </form>
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
