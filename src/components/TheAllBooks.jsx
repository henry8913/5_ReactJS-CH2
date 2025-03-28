
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

function TheAllBooks({ selectedCategory = 'history', searchQuery = '' }) {
  const [books, setBooks] = useState([]);
  const [allBooks, setAllBooks] = useState({});
  const [selectedBookId, setSelectedBookId] = useState('');

  useEffect(() => {
    const categories = ['history', 'horror', 'romance', 'fantasy', 'scifi'];
    const loadAllBooks = async () => {
      try {
        const booksByCategory = {};
        for (const category of categories) {
          const response = await fetch(`/books/${category}.json`);
          const data = await response.json();
          booksByCategory[category] = data;
        }
        setAllBooks(booksByCategory);
        setBooks(booksByCategory[selectedCategory] || []);
      } catch (error) {
        console.error('Error loading books:', error);
      }
    };
    loadAllBooks();
  }, [selectedCategory]);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Row>
            {filteredBooks.map((book) => (
              <Col xs={12} sm={6} md={4} lg={3} key={book.asin}>
                <SingleBook 
                  book={book}
                  selected={selectedBookId === book.asin}
                  onClick={() => setSelectedBookId(book.asin)}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <div className="comment-area">
            {selectedBookId && <CommentArea bookId={selectedBookId} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default TheAllBooks;
