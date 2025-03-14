
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Categories({ onSelectCategory, selectedCategory }) {
  const categories = [
    { name: 'history', icon: 'book-half' },
    { name: 'horror', icon: 'lightning' },
    { name: 'romance', icon: 'heart' },
    { name: 'fantasy', icon: 'magic' },
    { name: 'scifi', icon: 'rocket' }
  ];

  return (
    <section className="bg-light py-5">
      <Container>
        <h2 className="text-center mb-4">Browse by Category</h2>
        <Row className="g-4 justify-content-center">
          {categories.map((category, index) => (
            <Col key={index} xs={6} sm={6} md={4} lg={2}>
              <Card 
                className="h-100 text-center" 
                style={{ 
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: category.name === selectedCategory ? '0 0 10px rgba(0,123,255,0.5)' : 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = category.name === selectedCategory ? '0 0 10px rgba(0,123,255,0.5)' : 'none';
                }}
                onClick={() => onSelectCategory(category.name)}
              >
                <Card.Body>
                  <i className={`bi bi-${category.icon} display-4 text-primary mb-3`}></i>
                  <h3 className="h5">{category.name}</h3>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Categories;
