import React from 'react';
import { Container, Dropdown } from 'react-bootstrap';
import '../App.css';
import fbLogo from '../galeria/f_logo_RGB-White_58.png';

export default class Contacto extends React.Component {

    render() {
        return (
            <Container fluid style={{ background: '#000000' }} id='contacto' className={'mt-4 mb-7'} align='center'>
                <div className='contact-1'>EL LECHONCITO</div>
                <div className='contact-1'>AL HORNO</div>
                <Dropdown.Divider style={{ borderWidth: '5px', borderColor: '#006341' }} />
                <Dropdown.Divider style={{ borderWidth: '5px', borderColor: '#ffffff' }} />
                <Dropdown.Divider style={{ borderWidth: '5px', borderColor: '#CE1126' }} />
                <div className='contact-2'>
                    <div>
                        <a style={{ color: 'white' }} href={'https://www.facebook.com/lechoncitoalhorno/'} target={'_blank'} rel="noopener noreferrer">
                            <img className="fb-logo" alt='fb' src={fbLogo} />lechoncitoalhorno</a>
                    </div>
                    <div>
                        <a style={{ color: 'white' }} href={'tel:+52-311-910-7690'} target={'_blank'} rel="noopener noreferrer">
                            tel. 311 9107690</a>
                    </div>
                </div>
            </Container>

        )
    }
}