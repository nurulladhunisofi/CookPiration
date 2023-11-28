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
import Alert from 'react-bootstrap/Alert';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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
                    <p>Silahkan siapkan bahan-bahannya sebelum memasak</p>
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
                    <Row>
                        <Col md={12} className="rounded p-3" style={{backgroundColor:'#F7E2D3'}}>
                            <h4 className="text-center">Beri Rating Resep Ini</h4>
                            <Row>
                                <Col md={10} style={{fontSize:'30pt'}} className="m-auto text-center text-secondary">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </Col>
                            </Row>
                            <Row className="mt-3">
                                <Button variant="outline-warning" className="btn m-auto w-50 bg-oranye text-light">Beri Rating</Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={6}>
                    <h5>Cara Memasak</h5>
                    <Row className="mt-2">
                        <Col md={6}>
                            <img src="./komponen-gambar/tutorial-resep-langkah-1.png" alt="" />
                        </Col>
                        <Col md={6}>
                            <h5 className="text-oranye">Langkah 1</h5>
                            <p>
                                Tumis bawang bombay dan bawang putih hingga harum.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6}>
                            <img src="./komponen-gambar/tutorial-resep-langkah-2.png" alt="" />
                        </Col>
                        <Col md={6}>
                            <h5 className="text-oranye">Langkah 2</h5>
                            <p>                   
                                Masukkan jamur champignon, smoke beef. Aduk hingga rata.
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col md={6}>
                            <img src="./komponen-gambar/tutorial-resep-langkah-3.png" alt="" />
                        </Col>
                        <Col md={6}>
                            <h5 className="text-oranye">Langkah 3</h5>
                            <p>    
                                Campurkan kaldu ayam, jagung, gula, garam dan cream.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-3">
                <h3>Diskusi</h3>
                <Col md={12}>
                    <Card className="w-100">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <FloatingLabel controlId="floatingTextarea2" label="Beri Komentar">
                                        <Form.Control as="textarea" placeholder="Beri Komentar" style={{ height: '100px' }}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Button variant="outline-warning" className="btn bg-oranye text-light" type="submit">
                                    Kirim
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={12} className="mb-2">
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title>
                                <p className="fw-bold">
                                    <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                                    Rose Blackpink
                                </p>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">1 Minggu yang lalu</Card.Subtitle>
                            <Card.Text>
                                Resepnya enak Sekali
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={12} className="mb-2">
                    <Card className="w-100">
                        <Card.Body>
                            <Card.Title>
                                <p className="fw-bold">
                                    <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                                    Rose Blackpink
                                </p>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">1 Minggu yang lalu</Card.Subtitle>
                            <Card.Text>
                                Cocok buat oek hantama
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3 mb-5">
                <Col md={12}><h5>Resep Lainnya</h5></Col>
                <Row className="m-auto">
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p className="fw-bold">
                                <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                                Rose Blackpink
                                </p>
                            </Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="/komponen-gambar/gulai-ikan.png" />
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Gulai ayam</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                                <FontAwesomeIcon icon={faStar} /> 4.9
                                </Col>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faEye} /> 150</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faBookmark} />
                                </Col>
                            </Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p className="fw-bold">
                                <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                                Rose Blackpink
                                </p>
                            </Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="/komponen-gambar/ikan-bakar.png" />
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Ikan Bakar</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                                <FontAwesomeIcon icon={faStar} /> 4.9
                                </Col>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faEye} /> 150</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faBookmark} />
                                </Col>
                            </Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p className="fw-bold">
                                <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                                Rose Blackpink
                                </p>
                            </Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="/komponen-gambar/mie-aceh.png" />
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Mie Aceh</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                                <FontAwesomeIcon icon={faStar} /> 4.9
                                </Col>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faEye} /> 150</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faBookmark} />
                                </Col>
                            </Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col xs={6} md={3} className="mb-4">
                    <Card>
                        <Card.Body>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p className="fw-bold">
                                <img style={{width: '40px'}} className="me-3" src="/komponen-gambar/foto-profil.png" alt="" /> 
                                Rose Blackpink
                                </p>
                            </Col>
                            </Row>
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src="/komponen-gambar/rendang.png" />
                        <Card.Body>
                        <Card.Title className="text-center"><h5>Rendang</h5></Card.Title>
                        <Card.Text>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faClock} /> 25 Menit</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-75 p-1 text-center">
                                <FontAwesomeIcon icon={faStar} /> 4.9
                                </Col>
                            </Col>
                            </Row>
                            <Row>
                            <Col>
                                <p><FontAwesomeIcon icon={faEye} /> 150</p>
                            </Col>
                            <Col>
                                <Col className="bg-oranye rounded ms-auto text-light w-50 p-1 text-center">
                                <FontAwesomeIcon icon={faBookmark} />
                                </Col>
                            </Col>
                            </Row>
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

export default HalamanDetailResep