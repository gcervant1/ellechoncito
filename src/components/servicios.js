import React from 'react'
import {Card, Col,Row, Dropdown, Container} from 'react-bootstrap'
import bodaImg from '../galeria/boda.jpg'
import tacoImg from '../galeria/taco.jpg'
import '../App.css';
export default class Servicios extends React.Component{
render(){
    return(<div align='center'>
    <Dropdown.Divider style={{ borderWidth: '5px', borderColor: 'white' }} />
    <div className="mt-4 break-text" align='center'>Servicios</div>
    <Dropdown.Divider style={{ borderWidth: '5px', borderColor: 'white' }} />
    <Container style={{ background: 'rgb(0,0,0, 0.1)' }} fluid id='servicios' align='center'>
        <Row className='mr-auto row-eq-height'>
            <Col xl={4} className='mt-4 mb-4'>
                <Card classname='shadow p-3 mb-5 bg-white rounded'>
                    <Card.Body>
                        <img src={tacoImg} className='imagen-servicio' alt='test' />
                        <div className='evento'>Eventos Sociales</div>
                        <Dropdown.Divider style={{ borderWidth: '5px', borderColor: '#bd1f2' }} />
                        <div className='descripcion'>Pasa mas tiempo socializando con amigos y familia, en El Lechoncito nos especializamos en brindarte lo mejor.</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} className='mt-4 mb-4'>
                <Card classname='shadow p-3 mb-5 bg-white rounded'>
                    <Card.Body>
                        <img src={bodaImg} style={{ height: '30vh', width: '100%', objectFit: 'cover' }} alt='test' />
                        <div className='evento'>Bodas & XV Años</div>
                        <Dropdown.Divider style={{ borderWidth: '5px', borderColor: '#bd1f2' }} />
                        <div className='descripcion'>Disfruta de tu evento sin tener que preocuparte por los alimentos, nosotros nos encargamos</div>
                    </Card.Body>
                </Card>
            </Col>
            <Col xl={4} className='mt-4'>
                <Card classname='shadow p-3 mb-5 bg-black rounded'>
                    <Card.Body>
                        <img src={tacoImg} style={{ height: '30vh', width: '100%', objectFit: 'cover' }} alt='test' />
                        <div className='evento'>Corporativo</div>
                        <Dropdown.Divider style={{ borderWidth: '5px', borderColor: '#bd1f2' }} />
                        <div className='descripcion'>Atendemos cualquier tipo de evento, estaremos felices de cubrir sus necesidades.</div>
                    </Card.Body>
                </Card>
            </Col>

        </Row>
    </Container>
</div>)
}
}