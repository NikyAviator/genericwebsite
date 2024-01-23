import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { happydog } from '../images/happy-dog.jpg';

import tma1 from '../public/tma1.jpeg';
import tma2 from '../public/tma2.jpeg';

function BasicCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={tma1} alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='d-block w-100 ' src={tma2} alt='Second slide' />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className='d-block w-100 ' src={tma1} alt='Third slide' />
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

export default BasicCarousel;
