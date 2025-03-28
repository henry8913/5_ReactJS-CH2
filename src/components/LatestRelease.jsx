
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SingleBook from './SingleBook';
import CommentArea from './CommentArea';

const LatestRelease = ({ books }) => {
  const [selectedBookId, setSelectedBookId] = useState(null);

  return (
    <Container fluid>
      <Row>
        <Col md={8}>
          <Row className="g-4">
            {books.map((book) => (
              <Col xs={12} sm={6} md={4} key={book.asin}>
                <SingleBook 
                  book={book}
                  isSelected={selectedBookId === book.asin}
                  onSelect={setSelectedBookId}
                />
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <CommentArea bookId={selectedBookId} />
        </Col>
      </Row>
    </Container>
  );
};

export default LatestRelease;
