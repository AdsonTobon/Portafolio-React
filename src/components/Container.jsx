import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Projects from './Projects';
import Tools from './Tools';
import Footer from './Footer';
import Cv from './Cv';

export default class Container extends Component {
    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
            <div>
                <Nav/>
                <Header/>
                <Projects/>
                <Tools/>
                <Cv/>
                <Footer/>
            </div>
        )
    }
}
