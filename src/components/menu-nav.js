import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../App.css';
import Scroll from 'react-scroll-into-view';
export default class MenuNav extends React.Component {

    render() {
        return (
            <Navbar bg="light" fluid fixed='top' variant='light' expand="sm">
            <Navbar.Brand> <Scroll selector='#home'>
                            <Nav.Link style={{color:'black'}}>Inicio</Nav.Link>
                        </Scroll></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse  >
                    <Nav className="justify-content-center headerStyle" >
                       
                        <Scroll selector='#servicios'>
                            <Nav.Link>Servicios</Nav.Link>
                        </Scroll>
                        <Scroll selector='#galeria'>
                            <Nav.Link >Galeria</Nav.Link>
                        </Scroll>
                        <Scroll selector='#promos'>
                            <Nav.Link >Promociones</Nav.Link>
                        </Scroll>
                        <Nav.Link href={'tel:+52-311-910-7690'} target={'_blank'} variant="outline-dark">Llamenos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}