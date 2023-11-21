import React from 'react'
import NavbarSebelumLogin from '../components/NavbarSebelumLogin'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
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
          <h5>Top Resep Mingguan</h5>
        </Row>
      </Container>
    </div>
  )
}

export default HalamanSebelumLogin