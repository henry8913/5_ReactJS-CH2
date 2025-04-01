
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import CommentArea from './CommentArea';

const BookDetails = () => {
  const { asin } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);
  const categories = ['history', 'horror', 'romance', 'fantasy', 'scifi'];
  
  useEffect(() => {
    const findBook = async () => {
      for (const category of categories) {
        try {
          const response = await fetch(`/books/${category}.json`);
          const books = await response.json();
          const book = books.find(b => b.asin === asin);
          if (book) {
            setSelectedBook(book);
            break;
          }
        } catch (error) {
          console.error(`Error loading ${category} books:`, error);
        }
      }
    };
    
    findBook();
  }, [asin]);

  if (!selectedBook) {
    return (
      <Container className="mt-5 pt-5">
        <h2>Libro non trovato</h2>
        <Link to="/" className="btn btn-primary">Torna alla Home</Link>
      </Container>
    );
  }

  return (
    <Container className=" pt-5">
      <Row className="g-4">
        <Col lg={6}>
          <Card className="shadow-sm border-0 h-100 book-details-card">
            <div className="p-4">
              <Card.Img 
                variant="top" 
                src={selectedBook.img} 
                alt={selectedBook.title}
                className="book-image mb-4"
              />
            </div>
            <Card.Body className="bg-light p-4">
              <Card.Title className="h3 mb-4">{selectedBook.title}</Card.Title>
              <div className="book-info mb-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Categoria</span>
                  <span className="badge bg-primary px-3 py-2">{selectedBook.category}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Prezzo</span>
                  <span className="h5 text-success mb-0">${selectedBook.price}</span>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">ASIN</span>
                  <span className="text-secondary">{selectedBook.asin}</span>
                </div>
              </div>
              <Link to="/" className="btn btn-primary w-100 py-2">
                <i className="bi bi-arrow-left me-2"></i>
                Back to Home
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          <CommentArea bookId={asin} />
        </Col>
      </Row>
    </Container>
  );
};

export default BookDetails;
