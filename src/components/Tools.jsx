import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './../css/Tools.css';
const Tools =()=>{

    return (
        <div id="Container-Tools">
            <div id="Container-Name-Tools">
                <p id="Name"> <span id="Name-P">P</span>rincipales</p>
                <p id="Last-Name"> <span id="Last-H">H</span>erramientas</p>
            </div>
            <div className="iconos">
                <ul className="contacto-iconos">
                    <li><a className='links-herramientas' href='https://developer.mozilla.org/es/docs/HTML/HTML5' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'html5']} /></a></li>
                    <li><a className='links-herramientas' href='https://developer.mozilla.org/es/docs/Web/CSS' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'css3-alt']} /></a>
                    </li>
                    <li><a className='links-herramientas' href='https://standardjs.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'js-square']} /></a>
                    </li>
                    <li><a className='links-herramientas' href='https://es.reactjs.org/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'react']} /></a>
                    </li>
                    <li><a className='links-herramientas' href='https://getbootstrap.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'bootstrap']} /></a>
                    </li>
                    <li><a className='links-herramientas' href='https://git-scm.com/' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='iconos' icon={['fab', 'git-alt']} /></a>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}


export default Tools;