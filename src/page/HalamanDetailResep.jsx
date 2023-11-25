import React from 'react'
import NavbarSesudahLogin from '../components/NavbarSesudahLogin'
import Footer from '../components/Footer'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Alert from 'react-bootstrap/Alert';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck, faUser, faBookmark, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'
const HalamanDetailResep = () => {
  return (
    <div>
        <NavbarSesudahLogin/>
        <Container style={{marginTop:'90px'}}>
            <Row>
                <Col md={5}>
                    <img src="./komponen-gambar/sup jagung.png" className='img-fluid' alt="" />
                </Col>
                <Col md={7}>
                    <h2 className="text-start">Resep Krim Sup Jamur</h2>
                    <Row>
                        <Col md={6}>
                            <h4>
                                <FontAwesomeIcon style={{fontSize:'30px'}} className="text-oranye me-2" icon={faUser} />
                                CookPiration
                                <FontAwesomeIcon style={{fontSize:'15px'}} className="text-primary ms-1" icon={faCircleCheck} />
                            </h4>
                        </Col>
                        <Col md={6}>
                          <div style={{width:'70px'}} className="bg-oranye rounded me-auto text-light p-1 text-center">
                            <FontAwesomeIcon icon={faStar} /> 4.9
                          </div>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col>
                            <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                        </Col>
                        <Col>
                            <p><FontAwesomeIcon icon={faUtensils} /> 3-4 Porsi</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={6}>
                    <h5>Bahan</h5>
                    <p>Slahkan siapkan bahan-bahannya sebelum memasak</p>
                    <ul>
                        <Alert variant="warning">
                            <p style={{fontSize:'14pt'}}><li className="ms-4">¼ buah bawang bombay</li></p>
                        </Alert>
                        <Alert variant="warning">
                            <p style={{fontSize:'14pt'}}><li className="ms-4">2 siung bawang putih cincang</li></p>
                        </Alert>
                        <Alert variant="warning">
                            <p style={{fontSize:'14pt'}}><li className="ms-4">Minyak secukupnya</li></p>
                        </Alert>
                        <Alert variant="warning">
                            <p style={{fontSize:'14pt'}}><li className="ms-4">Jamur champignon secukupnya</li></p>
                        </Alert>
                    </ul>
                </Col>
                <Col md={6}>
                    <h5>Cara Memasak</h5>
                    <Row>
                        <Col md={6}>

                        </Col>
                        <Col md={6}>
                            <p className="text-oranye">Langkah 1</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default HalamanDetailResep