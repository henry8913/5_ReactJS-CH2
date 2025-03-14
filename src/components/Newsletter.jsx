
import React from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';

function Newsletter() {
  return (
    <section className="bg-primary bg-opacity-10 py-5">
      <Container className="text-center">
        <h2 className="mb-3">Stay Updated</h2>
        <p className="mb-4">Subscribe to our newsletter for the latest books and exclusive offers</p>
        <Row className="justify-content-center">
          <Col md={6}>
            <InputGroup>
              <Form.Control type="email" placeholder="Enter your email" />
              <Button variant="primary">Subscribe</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Newsletter;
