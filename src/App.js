import React from 'react';
import './App.css';
import NavMenu from './components/menu-nav'
import Servicios from './components/servicios'
import Galeria from './components/galeria'
import Promos from './components/promos'
import { Container,Row,Dropdown } from 'react-bootstrap'

import Contacto from './components/contacto';

import tacoImg from './galeria/taco.jpg'
import lechon from './galeria/firstItem.jpeg'
import lechon2 from './galeria/2.jpg'
import lechon3 from './galeria/3.jpeg'



export default class App extends React.Component {
  render(){
  return (
    <Container fluid style={{ background: '#000000'}}>
     <NavMenu/>
      <div id='home' align='center' >
        <img className='main-img' alt={'headerImg'} src={require('./logoLechon.png')} />
      </div >
      <Dropdown.Divider style={{ borderWidth: '5px', borderColor: 'white' }} />
      <Row>
        <img className='image-show' src={tacoImg} alt={'img'} />
        <img className='image-show' src={lechon} alt={'img'} />
        <img className='image-show' src={lechon2} alt={'img'} />
        <img className='image-show' src={lechon3} alt={'img'} />
      </Row>
      <Servicios/>
     <div style={{ background: '#FFFFFF'}} className='section2'> 
     <Galeria/>
      <Promos/>
      </div>
     
      <Contacto/>
     
    </Container>
  );
}
}