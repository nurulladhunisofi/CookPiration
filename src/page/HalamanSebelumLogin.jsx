import React from 'react'
import NavbarSebelumLogin from '../components/NavbarSebelumLogin'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookmark, faClock } from '@fortawesome/free-solid-svg-icons'
const HalamanSebelumLogin = () => {
  return (
    <div>
      <NavbarSebelumLogin/>
      <Image className="mb-5" style={{marginTop: '80px'}} src="/komponen-gambar/Frame 99.png" fluid />
      <Container>
        <Row className="mb-4">
          <Col md={6}>
            <Image src="/komponen-gambar/group-salad.png" fluid />
          </Col>
          <Col md={6}>
            <h1 style={{marginTop : '30%'}} >Ciptakan kenangan indah dengan setiap <div className="text-oranye">
              hidangan</div> yang Anda buat. <br /> <br />  <a className="btn w-50 bg-oranye text-light m-auto" href="">Lihat Semua Resep <FontAwesomeIcon icon={faArrowRight} /></a>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12}><h5>Top Resep Mingguan</h5></Col>
          <Row className="m-auto">
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="/komponen-gambar/image 19.png" />
                <Card.ImgOverlay className="w-25 text-center ms-auto">
                  <Card.Text className="bg-dark text-light">
                    <FontAwesomeIcon icon={faBookmark} />
                  </Card.Text>
                </Card.ImgOverlay>
                <Card.Body>
                  <Card.Title className="text-center"><h5>Gulai ayam</h5></Card.Title>
                  <Card.Text>
                    <FontAwesomeIcon icon={faClock} /> 25 Menit
          
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  )
}

export default HalamanSebelumLogin