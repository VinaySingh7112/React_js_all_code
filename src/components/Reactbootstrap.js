
import {Card , Button} from 'react-bootstrap'

import React,{Component} from 'react'

class BasicExample extends Component {
  render(){
  return (
    <>    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{this.props.data}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>a
    </>
   

  )
  };
}
BasicExample.defaultProps ={
  name:"Vinay Singh" ,link:"link"
}

export default BasicExample;