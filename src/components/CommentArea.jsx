
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

const CommentArea = ({ bookId, show, onHide, title, bookImage }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${bookId}`,
        {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNzU5NDM4MzRiZjAwMTUwMDA5MzAiLCJpYXQiOjE3NDI1NjY4MDUsImV4cCI6MTc0Mzc3NjQwNX0.YIaNEeRhnNBhnhkbkqF6XCnMAVy9Y0-V_j6vj84bOjc'
          }
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments(data);
        setError(null);
      } else {
        setError('Failed to fetch comments');
      }
    } catch (error) {
      setError('Error fetching comments: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (show && bookId) {
      fetchComments();
    }
  }, [show, bookId]);

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Reviews for {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={bookImage} alt={title} className="modal-book-image mb-3" />
        {isLoading && <div>Loading comments...</div>}
        {error && <div className="text-danger">{error}</div>}
        {!isLoading && !error && (
          <>
            <CommentsList comments={comments} onCommentUpdated={fetchComments} />
            <AddComment bookId={bookId} onCommentAdded={fetchComments} />
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default CommentArea;