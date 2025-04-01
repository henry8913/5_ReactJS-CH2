import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleBook = ({ book, selected, onClick }) => {
  return (
    <Card 
      className={`book-card h-100 ${selected ? 'border-danger' : ''}`}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
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
        <Link to={`/book/${book.asin}`} className="btn btn-primary mt-2">
            View Details
          </Link>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;