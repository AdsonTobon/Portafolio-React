import React, { Component } from 'react'
import { Carousel, CarouselItem  } from 'react-bootstrap'
import './../css/Projects.css';


export default class Projects extends Component {
    render() {
        return (
            <div id="Container-Projects">
                <Carousel id="projects" className="carousel">
                <CarouselItem>
                    <h2>GitHub Search</h2>
                <a id="tribute" href="https://gitinnova-sigma.vercel.app/" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/github.jpg'}
                    alt="GitHub Search"
                ></img> 
                </a>
                <p>Buscador de Repositorios GitHub</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>MoviReto</h2>
                <a id="tribute" href="https://movi-reto-pi.vercel.app/" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/MoviReto.JPG'}
                    alt="MoviReto"
                ></img> 
                </a>
                <p>Aplicación de movilidad compartida</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>Pokemon API</h2>
                <a id="tribute" href="https://react-pokeapi-5vbplimqy.vercel.app/" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/pokemon.JPG'}
                    alt="PokemonApi"
                ></img> 
                </a>
                <p>Creación de un pokedex</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>Random Quote</h2>
                <a id="tribute" href="https://random-quote-machine-ashy.vercel.app/" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/Random.JPG'}
                    alt="RandomQuote"
                ></img> 
                </a>
                <p>Generador de citas aleatorias</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>Landing Page</h2>
                <a id="tribute" href="https://product-landing-page-free-code-camp.vercel.app/" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/landing.JPG'}
                    alt="LandingPage"
                ></img> 
                </a>
                <p>Landing Page cursos parrilleros</p>
                </CarouselItem>
                <CarouselItem>
                    <h2>Survey Form</h2>
                <a id="tribute" href="https://survey-form-free-code-camp.vercel.app/" target='_blank' rel="noopener noreferrer">
                <img
                    className="d-block" 
                    src= {process.env.PUBLIC_URL + '/images/formulario.JPG'}
                    alt="SurveyForm"
                ></img> 
                </a>
                <p>Encuesta sobre emprendimiento</p>
                </CarouselItem>
                
            </Carousel> 
          </div>     
            
        )
    }}