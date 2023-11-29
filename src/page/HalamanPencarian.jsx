import React from 'react'
import NavbarSesudahLogin from '../components/NavbarSesudahLogin'
import Footer from '../components/Footer'
import Paginasi from '../components/Paginasi';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
// font awesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faUser, faBookmark, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'
const HalamanPencarian = () => {
  return (
    <div>
        <NavbarSesudahLogin/>
        <Container>
            <Row style={{marginTop:'80px'}}>
                <Col md={12}><h5>Hasil untuk "Resep Sarapan"</h5></Col>
                <Row className="m-auto">
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="/komponen-gambar/gulai-ikan.png" />
                        <Card.ImgOverlay className="text-center ms-auto">
                        <Row className="m-auto">
                            <Col xs={4} md={2} className="bg-dark ms-auto">
                            <Card.Text className="text-light">
                            <FontAwesomeIcon icon={faBookmark} />
                            </Card.Text>
                            </Col>
                        </Row>
                        </Card.ImgOverlay>
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Gulai ayam</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
                            </Col>
                            </Row>
                            <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                            <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                            </Col>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="/komponen-gambar/ikan-bakar.png" />
                        <Card.ImgOverlay className="text-center ms-auto">
                        <Row className="m-auto">
                            <Col xs={4} md={2} className="bg-dark ms-auto">
                            <Card.Text className="text-light">
                            <FontAwesomeIcon icon={faBookmark} />
                            </Card.Text>
                            </Col>
                        </Row>
                        </Card.ImgOverlay>
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Ikan Bakar</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
                            </Col>
                            </Row>
                            <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                            <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                            </Col>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="/komponen-gambar/nasi-kuning.png" />
                        <Card.ImgOverlay className="text-center ms-auto">
                        <Row className="m-auto">
                            <Col xs={4} md={2} className="bg-dark ms-auto">
                            <Card.Text className="text-light">
                            <FontAwesomeIcon icon={faBookmark} />
                            </Card.Text>
                            </Col>
                        </Row>
                        </Card.ImgOverlay>
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Nasi Kuning</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
                            </Col>
                            </Row>
                            <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                            <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                            </Col>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src="/komponen-gambar/soto-bogor.png" />
                        <Card.ImgOverlay className="text-center ms-auto">
                        <Row className="m-auto">
                            <Col xs={4} md={2} className="bg-dark ms-auto">
                            <Card.Text className="text-light">
                            <FontAwesomeIcon icon={faBookmark} />
                            </Card.Text>
                            </Col>
                        </Row>
                        </Card.ImgOverlay>
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Soto Bogor</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <p><FontAwesomeIcon icon={faUtensils} /> 2 Porsi</p>
                            </Col>
                            </Row>
                            <Col style={{borderRadius: '100%', width: '30px', height: '30px'}} className="bg-oranye ms-auto text-light">
                            <FontAwesomeIcon style={{margin: '25%'}} icon={faHeart} /> 
                            </Col>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                <Row>
                    <Col className="m-auto" md={2}>
                        <Paginasi/>
                    </Col>
                </Row>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default HalamanPencarian