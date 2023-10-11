import React, { Component } from 'react';
import Card from './Card2';

export default class Home1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: "",
      show: true,
      searchText: '',
      searchResults: [],
      loading: false,
    };
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      this.performSearch(this.state.searchText);
    }
  };

  Search = async (query) => {
    if (query.trim() === '') return;

    this.setState({ loading: true });

    try {
      const response = await fetch(`https://dummyjson.com/products/category/${query}?skip=0&limit=99`)
        .then((res) => res.json())
        .then((result) => {
          this.setState({ data: result.products });
        });
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { data, show, searchText, loading } = this.state;

    let toggle = () => {
      this.setState({
        show: !this.state.show,
      });
    };

    let deleted = (i) => {
      alert(i);
      let copy = data.slice();
      copy.splice(i, 1);
      this.setState({
        data: copy,
      });
    };

    return (
      <>
        <div className='d-flex'>
        <input className='m-4 rounded-4 w-25 container-fluid'
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(event) => this.setState({ searchText: event.target.value })}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={toggle}>toggle</button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            
            {show ? (
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
            ) : (
              <h1 className='w-50 m-auto bg-info p-5 border'>no items</h1>
            )}
          </div>
        )}
      </>
    );
  }
}
