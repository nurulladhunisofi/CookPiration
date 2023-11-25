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
import Pagination from 'react-bootstrap/Pagination';
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBookmark, faClock, faUtensils, faHeart, faStar, faEye } from '@fortawesome/free-solid-svg-icons'

const HalamanSebelumLogin = () => {
  let active = 2;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  return (
    <div>
      <NavbarSesudahLogin/>
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
                <Card.Img variant="top" src="/komponen-gambar/gulai-ikan.png" />
                <Card.ImgOverlay className="w-25 text-center ms-auto">
                  <Card.Text className="bg-dark text-light">
                    <FontAwesomeIcon icon={faBookmark} />
                  </Card.Text>
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
                <Card.ImgOverlay className="w-25 text-center ms-auto">
                  <Card.Text className="bg-dark text-light">
                    <FontAwesomeIcon icon={faBookmark} />
                  </Card.Text>
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
                <Card.ImgOverlay className="w-25 text-center ms-auto">
                  <Card.Text className="bg-dark text-light">
                    <FontAwesomeIcon icon={faBookmark} />
                  </Card.Text>
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
                <Card.ImgOverlay className="w-25 text-center ms-auto">
                  <Card.Text className="bg-dark text-light">
                    <FontAwesomeIcon icon={faBookmark} />
                  </Card.Text>
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
        </Row>
        <Row className="mb-4 p-4" style={{backgroundColor: '#FDF2E9'}}>
          <Col md={12}>
            <h2 className="text-center text-oranye mt-4">Masak Bahan Yang Kamu Punya</h2>
          </Col>
          <Col className="m-auto" md={10}>
            <Row className="mt-5">
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/ikan.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Ikan</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/ayam.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Ayam</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/b-merah.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Bawang Merah</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/telur.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Telur</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/tomat.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Tomat</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/kentang.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Kentang</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/jamur.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Jamur</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/tahu.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Tahu</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/b-putih.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Bawang Putih</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/tempe.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Tempe</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/jagung.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Jagung</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={2} className="mb-3">
                <Card>
                  <Card.Img variant="top" src="/komponen-gambar/cabe merah.png" />
                  <Card.Body>
                    <Card.Title className="text-center"><h6>Cabe Merah</h6></Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col md={5} className="m-auto">
            <a className="btn w-100 bg-oranye text-light" href="">Cari Resep <FontAwesomeIcon icon={faArrowRight} /></a>
          </Col>
        </Row>
        <Row>
          <Col md={12}><h5>Bagi Resep</h5></Col>
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
              <div>
                <Pagination className="">{items}</Pagination>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col md={6} className="p-5">
            <img className="img-fluid mt-5 ms-5" src="/komponen-gambar/unduh aplikasi.png" alt="" />
          </Col>
          <Col md={6}>
            <img className="img-fluid ms-auto" src="/komponen-gambar/mockup hp.png" alt="" />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default HalamanSebelumLogin