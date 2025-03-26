import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import SingleBook from './SingleBook';

function TheAllBooks({ selectedCategory = 'history', searchQuery = '' }) {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState({});

  useEffect(() => {
    const categories = ['history', 'horror', 'romance', 'fantasy', 'scifi'];

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

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container className="my-5">
      <h2 className="mb-4">Books in {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</h2>
      {/* Search bar moved to MyNav component */}
      <Row className="g-4">
        {filteredBooks.map((book) => (
          <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TheAllBooks;