import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import carouselImage from '../../assets/img/carousel.png'

const HomeCarousel = () => {
  return (
    <div className="mx-auto max-w-full p-4">
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 h-[320px] object-cover sm:h-[420px] rounded-xl"
            src={carouselImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 h-[320px] object-cover sm:h-[420px] rounded-xl"
            src={carouselImage}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100 h-[320px] object-cover sm:h-[420px] rounded-xl"
            src={carouselImage}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeCarousel
