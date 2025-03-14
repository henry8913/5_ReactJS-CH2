
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function TheAllBooks({ selectedCategory = 'history' }) {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState({});

  useEffect(() => {
    const categories = ['history', 'horror', 'romance', 'fantasy', 'scifi'];
    
    // Carica tutti i dati delle categorie una sola volta
    const loadAllBooks = async () => {
      const bookData = {};
      await Promise.all(
        categories.map(async (category) => {
          const response = await fetch(`/books/${category}.json`);
          const data = await response.json();
          bookData[category] = data;
        })
      );
      setAllBooks(bookData);
      setBooks(bookData[selectedCategory] || []);
    };

    if (Object.keys(allBooks).length === 0) {
      loadAllBooks();
    } else {
      setBooks(allBooks[selectedCategory] || []);
    }
  }, [selectedCategory, allBooks]);

  return (
    <Container className="my-5">
      <h2 className="mb-4">Books in {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
      <Row className="g-4">
        {books.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <Card className="book-card h-100">
              <Card.Img 
                variant="top" 
                src={book.img} 
                alt={book.title}
                className="book-image"
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="flex-grow-1">{book.title}</Card.Title>
                <Card.Text className="mt-2">
                  <strong>Price: </strong>${book.price}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TheAllBooks;
