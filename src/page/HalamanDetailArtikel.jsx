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
const HalamanDetailArtikel = () => {
  return (
    <div>
        <NavbarSesudahLogin/>
        <Container className="mb-5">
            <Row>
                <Col md={12} style={{marginTop: '80px'}}>
                    <h1 className="text-center">Mie Aceh</h1>
                </Col>
                <Col md={4}>
                    <img className="img-fluid" src="./komponen-gambar/artikel-mie-aceh.png" alt="" />
                </Col>
                <Col md={8} className="text-center fw-bold mt-5">
                        Mie Aceh, dengan ciri khas mi yang kenyal dan kuah rempah yang pekat, telah mencuri perhatian pencinta kuliner di seluruh negeri. Namun, apa sebenarnya yang membuat hidangan ini begitu spesial? Artikel ini akan mengungkap segala rahasia dari proses pembuatannya, bumbu-bumbu khas yang melengkapi, hingga asal-usulnya yang kaya akan warisan budaya.
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={12}>
                    <img className="img-fluid rounded" src="./komponen-gambar/artikel-mie-aceh-2.png" alt="" />
                </Col>
                <Col className="m-auto mt-5" md={10}>
                    <Card className="w-100 bg-cream">
                        <Card.Subtitle className="mb-1 ms-2 mt-2 text-oranye">24 September 2023</Card.Subtitle>
                        <Card.Body>
                            <Card.Title><h5>Sejarah Mie Aceh</h5> </Card.Title>
                            <Card.Text style={{width:'200px'}} className="text-oranye">
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faUser} /> Admin
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> 10 Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text className="ms-auto text-oranye text-center" style={{backgroundColor:'white', border:'2px solid #E98649', borderRadius:'40px', fontSize:'20pt', width:'140px'}}>
                                <Row>
                                    <Col>
                                        <FontAwesomeIcon icon={faHeart} /> Suka
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Card.Text>
                                <h5>Jejak Awal Terbentuknya Mie Aceh</h5>
                                Sejarah Mie Aceh mencakup perpaduan kultur, citarasa, dan keahlian kuliner yang telah melalui perjalanan panjang dari masa lampau hingga saat ini. 
                                Konon, Mie Aceh pertama kali diperkenalkan oleh pedagang Tionghoa pada abad ke-17 yang telah menetap di wilayah Aceh. Sejak saat itu, Mie Aceh terus mengalami evolusi dan pengembangan dari waktu ke waktu.
                            </Card.Text>
                            <Card.Text>
                                <h5>Khasiat Kuliner Berbasis Rempah dan Tradisi Aceh</h5>
                                    Salah satu elemen yang menonjol dari Mie Aceh adalah kuah rempahnya yang pekat dan beraroma. Rempah-rempah ini tidak hanya memberikan cita rasa yang unik, tetapi juga merepresentasikan kaya akan rempah lokal Aceh seperti kunyit, 
                                lengkuas, jahe, dan ketumbar. Penggunaan rempah ini telah menjadi bagian tak terpisahkan dari identitas kuliner Aceh dan memberikan nuansa tersendiri pada setiap hidangan Mie Aceh.
                            </Card.Text>
                            <Card.Text>
                                <h5>Pengaruh Budaya dalam Pembuatan Mie Aceh</h5>
                                    Kuliner tidak hanya sekadar makanan, tetapi juga merupakan cermin dari budaya setempat. Begitu juga dengan Mie Aceh yang mengandung nilai-nilai sosial dan budaya Aceh. Proses pembuatannya yang masih mempertahankan cara tradisional
                                 menunjukkan kekayaan dan kelestarian budaya lokal.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </div>
  )
}

export default HalamanDetailArtikel