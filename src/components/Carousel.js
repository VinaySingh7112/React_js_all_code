import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function UncontrolledExample(props) {
  return (
    <Carousel>
      <Carousel.Item>
      <img src="https://picsum.photos/200/100" style={{width:"100%",height:"300px"}}></img>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3> {props.data?"hello":"by"}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="https://picsum.photos/100/230" style={{width:"100%",height:"300px"}}></img>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://picsum.photos/220/240"style={{width:"100%",height:"300px"}}></img>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;