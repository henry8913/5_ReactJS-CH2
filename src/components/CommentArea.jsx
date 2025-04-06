
import { useEffect, useState } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import AddComment from './AddComment';

const CommentArea = ({ bookId }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${bookId}`, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNzU5NDM4MzRiZjAwMTUwMDA5MzAiLCJpYXQiOjE3NDM5Mzc1NTcsImV4cCI6MTc0NTE0NzE1N30.86cNVMAt6MCMIzlalsGu-KjpJL7ydsfnNlJUdfbtE5s'
        }
      });
      if (!response.ok) throw new Error('Failed to fetch comments');
      const data = await response.json();
      setComments(data);
    } catch (error) {
      const errorMessage = response.status === 401 
        ? 'Authorization error. Please check your credentials.' 
        : response.status === 404
        ? 'Comments not found for this book.'
        : 'Error loading comments. Please try again later.';
      setError(errorMessage);
      console.error('Error fetching comments:', error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (bookId) {
      fetchComments();
    }
  }, [bookId]);

  if (!bookId) return <p>Select a book to see comments</p>;
  if (isLoading) return <Spinner animation="border" />;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h3>Comments</h3>
      <ListGroup className="mb-3">
        {comments.map(comment => (
          <ListGroup.Item key={comment._id}>
            <p>{comment.comment}</p>
            <small>Rating: {comment.rate}/5</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <AddComment bookId={bookId} onCommentAdded={fetchComments} />
    </div>
  );
};

export default CommentArea;
