import React from 'react'
import './../css/Nav.css';

const Nav =()=>{

    return (
        <div id="Container-principal">
            <div id="Container-Nav">
                <div id="Container-Nav-Title">
                    <p>/Portafolio Personal/</p>
                </div>
                <div id="Container-Nav-Menu">
                    <nav>
                        <a href="#Container-header" className="links-Menu">Inicio</a>
                        <a href="#Container-Projects" className="links-Menu">Proyectos</a>
                        <a href="#Container-Tools" className="links-Menu">Skills</a>
                        <a href="#Container-CV" className="links-Menu">CV</a>
                        <a href="#Container-Footer" className="links-Menu">Contacto</a>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Nav;