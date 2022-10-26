import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../programming1.jpg'
import img2 from '../programming2.jpg'
import img3 from '../programming3.jpg'
const BrandCarousel = () => {
    return (
        <Carousel>
      <Carousel.Item className=''>
        <img
          className="d-block w-100 rounded-5"
          src={img3}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-5"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-5"
          src={img1}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    );
};

export default BrandCarousel;