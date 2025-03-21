
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import CommentArea from './CommentArea';

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <Card 
      className={`book-card h-100 ${selected ? 'book-card-in-cart' : ''}`}
    >
      <Card.Img 
        variant="top" 
        src={book.img} 
        alt={book.title}
        className="book-image"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex-grow-1">{book.title}</Card.Title>
        <Button variant="primary" onClick={(e) => {
          e.stopPropagation();
          setSelected(!selected);
        }}>
          Show Reviews
        </Button>
      </Card.Body>
      <CommentArea 
        bookId={book.asin} 
        show={selected} 
        onHide={() => setSelected(false)}
        title={book.title}
        bookImage={book.img}
      />
    </Card>
  );
}

export default SingleBook;
