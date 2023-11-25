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
const Register = () => {
  return (
    <div>
        <Container className="mt-5 kartu-login rounded">
            <h3>Daftar</h3>
            <Form>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Depan</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nama Belakang</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Jenis Kelamin</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value=""></option>
                                <option value="">Laki-Laki</option>
                                <option value="">Perempuan</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Makanan Favorit</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="" />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Col className="ms-auto" md={1}>
                        <Button href="login" type="submit" variant="outline-warning" className="text-light" style={{backgroundColor: '#E98649'}}>Daftar</Button>
                    </Col>
                    <Col className="ms-auto me-3" md="3">
                        <p className="text-end">Sudah punya akun? <a className="fw-bold text-dark" href="login">Login</a></p>
                    </Col>
                </Form.Group>
            </Form>
        </Container>
    </div>
  )
}

export default Register