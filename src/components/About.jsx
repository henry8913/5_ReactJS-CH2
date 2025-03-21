
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <>
      <main className="container py-5 mt-5">
        <Card className="shadow-sm">
          <Card.Body className="p-4">
            <h1 className="display-5 text-center mb-5">About EPICBooks</h1>

            <img src="/img/about.webp" alt="Library interior" className="img-fluid rounded mb-5" />

            <Row className="mb-4">
              <Col lg={6} className="mb-4 mb-lg-0">
                <h2 className="h3 mb-4">Our Story</h2>
                <p className="text-muted">Founded in 2020, EPICBooks emerged from a simple idea: to make quality
                  literature accessible to everyone. What started as a small online bookstore has grown into a
                  community of passionate readers and book enthusiasts.</p>
              </Col>
              <Col lg={6}>
                <h2 className="h3 mb-4">Our Mission</h2>
                <p className="text-muted">At EPICBooks, we believe that everyone deserves access to quality
                  literature at affordable prices. Our mission is to connect readers with their next favorite
                  book while providing an exceptional shopping experience.</p>
              </Col>
            </Row>

            <Row className="mb-5">
              <h2 className="h3 mb-4 text-center">Our Values</h2>
              <Col md={4} className="mb-4">
                <Card className="h-100 bg-light border-0">
                  <Card.Body className="text-center">
                    <i className="bi bi-book display-4 text-primary mb-3"></i>
                    <h3 className="h5">Knowledge Access</h3>
                    <p className="text-muted mb-0">Making quality books available to everyone</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 bg-light border-0">
                  <Card.Body className="text-center">
                    <i className="bi bi-people display-4 text-primary mb-3"></i>
                    <h3 className="h5">Community</h3>
                    <p className="text-muted mb-0">Building connections through literature</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100 bg-light border-0">
                  <Card.Body className="text-center">
                    <i className="bi bi-star display-4 text-primary mb-3"></i>
                    <h3 className="h5">Excellence</h3>
                    <p className="text-muted mb-0">Providing outstanding service</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mb-5">
              <h2 className="h3 mb-4 text-center">Meet Our Team</h2>
              <Col md={4} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src="/img/Sarah.png" alt="Sarah Johnson" />
                  <Card.Body className="text-center">
                    <h3 className="h5">Sarah Johnson</h3>
                    <p className="text-muted">Founder & CEO</p>
                    <p className="small">Book enthusiast with 15 years of experience in publishing.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src="/img/Michael.png" alt="Michael Chen" />
                  <Card.Body className="text-center">
                    <h3 className="h5">Michael Chen</h3>
                    <p className="text-muted">Head of Curation</p>
                    <p className="small">Literary critic and former bookstore manager.</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="h-100">
                  <Card.Img variant="top" src="/img/Emma.png" alt="Emma Davis" />
                  <Card.Body className="text-center">
                    <h3 className="h5">Emma Davis</h3>
                    <p className="text-muted">Customer Experience</p>
                    <p className="small">Dedicated to creating amazing reading experiences.</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <h2 className="h3 mb-4 text-center">What Our Customers Say</h2>
              <Col md={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <img src="/img/David.png" alt="David Wilson" className="rounded-circle me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                      <div>
                        <h4 className="h6 mb-1">David Wilson</h4>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                    <p className="mb-0">"EPICBooks has transformed how I discover new reads. Their curated
                      collection and fast delivery make book shopping a joy. The personal touch in their
                      service is unmatched!"</p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <div className="d-flex align-items-center mb-3">
                      <img src="/img/Lisa.png" alt="Lisa Martinez" className="rounded-circle me-3"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                      <div>
                        <h4 className="h6 mb-1">Lisa Martinez</h4>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                    <p className="mb-0">"As an avid reader, I've tried many online bookstores, but EPICBooks
                      stands out. Their recommendations are spot-on, and the customer service is
                      exceptional!"</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mb-5">
              <h2 className="h3 mb-4 text-center">Visit Our Store</h2>
              <Col md={6}>
                <img src="/img/Store.jpeg" alt="Bookstore interior" className="img-fluid rounded mb-4" />
              </Col>
              <Col md={6}>
                <ul className="list-unstyled">
                  <li className="mb-3"><i className="bi bi-geo-alt me-2"></i>123 Book Street, Reading City, BC 12345</li>
                  <li className="mb-3"><i className="bi bi-telephone me-2"></i>(555) 123-4567</li>
                  <li className="mb-3"><i className="bi bi-envelope me-2"></i>contact@epicbooks.com</li>
                </ul>
                <div className="social-icons mt-4">
                  <a href="#" className="text-primary me-3"><i className="bi bi-facebook"></i></a>
                  <a href="#" className="text-primary me-3"><i className="bi bi-twitter"></i></a>
                  <a href="#" className="text-primary me-3"><i className="bi bi-instagram"></i></a>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </main>
    </>
  );
};

export default About;
