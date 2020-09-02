import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../css/Footer.css'


const Footer =()=>{

    return (
        <div id="Container-Footer">
            <div id="Container-Contacto">
                <h4>Contacto</h4>
                <p> <b>Email:</b> anderson.tobonp@gmail.com</p>
                <p> <b>Teléfono:</b>  3192656494</p>
                <p> <b>Ciudad:</b> Medellin - Antioquia (COL)</p>
                
            </div>
            <div id="Container-Redes">
                <h4>Redes Sociales</h4>
                <div id="Container-Iconos">
                    <a className='links-herramientas' href='https://www.linkedin.com/in/anderson-tobon-perez-471a10136/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'linkedin']} /></a>
                    <a className='links-herramientas' href='https://github.com/AdsonTobon' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'github-square']} /></a>
                    
                    <a className='links-herramientas' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'twitter-square']} /></a> 
                </div>
                
            </div>
        </div>
    )
}


export default Footer;