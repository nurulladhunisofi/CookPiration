import React from 'react'
//container
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//card
import Card from 'react-bootstrap/Card';
//form
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {
  return (
    <div>
        <Container className="mt-3 kartu-login rounded">
            <Row>
                <Col className="mb-5" md={6}>
                    <Col className="m-auto" md={8}>
                        <h3 style={{marginTop: '40px'}}>Masuk</h3>
                        {/* facebook */}
                        <Card className="p-2" border="dark">
                            <Row>
                                <Col>
                                    <img className='icon-login' src="/komponen-gambar/facebook.png" alt="" />
                                </Col>
                                <Col xs={10}>
                                    <h6 className="text-center">Masuk Dengan Facebook</h6>
                                </Col>
                            </Row>
                        </Card>
                        {/* instagram */}
                        <Card className="p-2 mt-3" border="dark">
                            <Row>
                                <Col>
                                    <img className='icon-login' src="/komponen-gambar/Instagram.png" alt="" />
                                </Col>
                                <Col xs={10}>
                                    <h6 className="text-center">Masuk Dengan Instagram</h6>
                                </Col>
                            </Row>
                        </Card>
                        {/* google */}
                        <Card className="p-2 mt-3" border="dark">
                            <Row>
                                <Col>
                                    <img className='icon-login' src="/komponen-gambar/google.png" alt="" />
                                </Col>
                                <Col xs={10}>
                                    <h6 className="text-center">Masuk Dengan Google</h6>
                                </Col>
                            </Row>
                        </Card>
                        <p className="fw-bold text-center mt-3">atau</p>
                        {/* form login */}
                        <Form>
                            <Form.Group border="dark" className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group border="dark" className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Ingat Saya" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Col className="ms-auto" md={3}>
                                    <Button href="halamanUtamaSesudahLogin" type="submit" variant="outline-warning" className="text-light" style={{backgroundColor: '#E98649'}}>Masuk</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                        <hr className="garis-hitam" />
                        <p className="text-center">Tidak punya akun? <a className="fw-bold text-dark" href="register">Daftar</a></p>
                    </Col>
                </Col>
                <Col className="bg-login rounded p-0" md={6}>
                    <img className="img-fluid rounded" src="/komponen-gambar/login.png" alt="" />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Login