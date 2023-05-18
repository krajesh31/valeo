import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slider1 from '../img/slider1.jpg'
import slider2 from '../img/slider2.jpg'
import slider3 from '../img/slider3.jpg'
import slider4 from '../img/slider4.jpg'

import '../css/slider.css'
function Slider() {
  return (
    <section>
      
      <Carousel className='slider'>
        <Carousel.Item>
        <img
            className="d-block w-100 slider-img"
            src={slider3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
      
           <img
            className="d-block w-100 slider-img"
            src={slider4}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100 slider-img"
            src={slider1}
            alt="First slide"
          />
          
         
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100 slider-img"
            src={slider2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

    </section>
  );
}

export default Slider;


