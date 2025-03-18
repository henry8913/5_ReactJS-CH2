
import { useState } from 'react';
import { Card } from 'react-bootstrap';

function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);

  return (
    <Card 
      className={`book-card h-100 ${selected ? 'book-card-in-cart' : ''}`}
      onClick={() => setSelected(!selected)}
    >
      <Card.Img 
        variant="top" 
        src={book.img} 
        alt={book.title}
        className="book-image"
        style={{ border: selected ? '3px solid red' : 'none' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex-grow-1">{book.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
