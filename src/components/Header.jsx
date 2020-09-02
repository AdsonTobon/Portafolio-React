import React from 'react'
import ImagenATP from './../img/ATP.png'
import './../css/Header.css';

const Header =()=>{

    return (
        <div id="Container-header">
            <div id="Container-Name">
                <p id="Name"> <span id="Name-A">A</span>nderson</p>
                <p id="Last-Name">Tobón <span id="completo"><span id="Last-Name-P">P</span>érez</span> </p>
            </div>
            <div id="Container-Perfil">
                <div id="Container-img">
                    <img id="img" src={ImagenATP} alt="Foto Perfil Anderson Tobon"/>
                </div>
                <div id="Container-Description">
                    <h2>Desarrollador de Software Front-End</h2>
                    <p>Desarrollador de software Front-End apasionado por la tecnología y todo lo cercano a su mundo, curioso y detallista por naturaleza. Persona con habilidades blandas enfocadas en la comunicación y el trabajo en equipo. Poseo habilidades en los siguiente lenguajes de programación y marcos de trabajo como: <b> HTML, CSS, JAVASCRIPT, REACT, NODEJS, BOOTSTRAP, SCRUM.</b></p>
                </div>
            </div>
        </div>
    )
}


export default Header;