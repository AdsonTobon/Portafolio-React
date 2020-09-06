import React, { Component } from 'react'
import { Carousel, CarouselItem  } from 'react-bootstrap'
import './../css/Projects.css';


export default class Projects extends Component {
    render() {
        return (
            <div id="Container-Projects">
                <Carousel id="projects" className="carousel">
                <CarouselItem>
                    <h2>Random Quote</h2>
                <a id="tribute" href="https://random-quote-machine-ashy.vercel.app/" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/Random.JPG'}
                    alt="Tribute Page"
                ></img> 
                </a>
                <p>Generador de citas aleatorias</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>Landing Page</h2>
                <a id="tribute" href="/#" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/landing.JPG'}
                    alt="Tribute Page"
                ></img> 
                </a>
                <p>Landing Page cursos parrilleros</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>Survey Form</h2>
                <a id="tribute" href="/#" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/formulario.JPG'}
                    alt="Tribute Page"
                ></img> 
                </a>
                <p>Encuesta sobre emprendimiento</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>Tribute Page</h2>
                <a id="tribute" href="/#" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/tributo.JPG'}
                    alt="Tribute Page"
                ></img> 
                </a>
                <p>Página tributo Thomas Alva Edison </p>
                </CarouselItem> 
                <Carousel.Item>
                    <h2>Technical Documentation Page</h2>
                <a id="survey" href="/#" target="_blank" rel="noopener noreferrer"> 
                <img
                    className="d-block"
                    src= {process.env.PUBLIC_URL + '/images/documentacion.JPG'}
                    alt="Survey form"
                /></a>
                <p>Documentación JavaScript </p>
                </Carousel.Item>
                

            </Carousel> 
          </div>     
            
        )
    }}