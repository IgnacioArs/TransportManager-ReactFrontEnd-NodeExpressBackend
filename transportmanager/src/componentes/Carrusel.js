import React from 'react'
import {Carousel} from 'react-bootstrap'
import uno from './img/uno.jpg'
import dos from './img/dos.jpg'
import tres from './img/tres.jpg'
const Carrusel = () => {
  return (
    <Carousel>
       {/*  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script> */}
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="./img/uno.jpg/800x400?text=First slide&bg=373940"
      alt="First slide"
      onChange={uno} 
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="./img/dos.jpg/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
       onChange={dos} 
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./img/tres.jpg/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
      onChange={tres} 
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

export default Carrusel
