
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Testimonials() {
  const testimonials = [
    { name: 'James Anderson', image: '/img/James.jpg', text: 'Incredible selection of books! The prices are fantastic and delivery was swift. Highly recommended!' },
    { name: 'Emily Thompson', image: '/img/Emily.jpg', text: 'EPICBooks has become my go-to bookstore. The user experience is absolutely fantastic!' },
    { name: 'William Carter', image: '/img/William.jpeg', text: 'Outstanding customer service and an excellent variety of books to choose from!' },
    { name: 'Robert Wilson', image: '/img/Robert.jpeg', text: 'The recommendations are always perfect. I\'ve discovered so many amazing books!' },
    { name: 'Rachel Brooks', image: '/img/Rachel.jpeg', text: 'Fast shipping and the books always arrive in perfect condition! Very satisfied customer.' },
    { name: 'Thomas Harrison', image: '/img/Thomas.jpeg', text: 'The loyalty program is fantastic. I love getting rewards for my purchases!' },
    { name: 'Michelle Mitchell', image: '/img/Michelle.jpeg', text: 'Their mobile app makes ordering books so convenient. Highly recommend!' }
  ];

  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center mb-4">What Our Readers Say</h2>
        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col key={index} md={index < 3 ? 4 : 3}>
              <Card className="h-100">
                <Card.Body>
                  <div className="d-flex align-items-center mb-3">
                    <img src={testimonial.image} alt={testimonial.name} className="rounded-circle me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    <div>
                      <h4 className="h6 mb-1">{testimonial.name}</h4>
                      <div className="text-warning">★★★★★</div>
                    </div>
                  </div>
                  <p className="card-text">{testimonial.text}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
