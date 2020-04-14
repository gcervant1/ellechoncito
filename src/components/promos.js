import React from 'react'
import {Container,Row, Col, Dropdown} from 'react-bootstrap'
import '../App.css';
export default class Promos extends React.Component{
    render(){
        return(
            <Container id="promos" fluid className={'mt-4 mb-4'} align='center'>
          <Dropdown.Divider style={{ borderWidth: '5px', borderColor: 'black' }} />
                <div className="mt-4 break-text-2" align='center'>promociones</div>
                <Dropdown.Divider style={{ borderWidth: '5px', borderColor: 'black' }} />
            
              <Row>
              <Col >
                <div className='paquete'>PAQUETE 1 - $3,000.00</div>
                <div className='detalles'>
                  <div>50 Personas</div>
                  <div>2 Horas de servicio</div>
                  <div>Desechables</div>
                  <div>Salsas y limones </div>
                </div>

                </Col>
                <Col >

                <div className='paquete'>PAQUETE 2 - $4,200.00</div>
                <div className='detalles'>
                  <div>100 Personas</div>
                  <div>2 Horas de servicio</div>
                  <div>Desechables</div>
                  <div>Salsas y limones </div>
                </div>
                </Col>
               
              </Row>
              <div align='center'>*10 % de descuento al contratar con 1 mes de anticipacion</div>
              
          
          </Container>
        )
    }
}