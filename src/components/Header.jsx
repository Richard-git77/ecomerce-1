import Carousel from 'react-bootstrap/Carousel';



import manzana from '/public/Manzanas1.png'
import sandia from '/public/sandia.jpg'

import mango from '/public/mango.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';


function Header() {
  return (
    <Carousel>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          
          src={mango}
          alt="First slide"
          height={500}
        />
        <Carousel.Caption>
          <h3>Manguito del Bueno</h3>
          <p>Si, si si si si puro manguitooooo</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={sandia}
          alt="Second slide"


          height={500}
        />
        <Carousel.Caption>
          <h3>Sandia colorida</h3>
          <p>Si comes cuando estas borracho te puedes morir.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={manzana}
          alt="Third slide"
          height={500}
        />
        <Carousel.Caption>
          <h3>Variedad en colores</h3>
          <p>

            40 dsemillas y adios
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default Header;