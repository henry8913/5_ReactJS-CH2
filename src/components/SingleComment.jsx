import { useState } from 'react';
import { Card, Button, Form, Spinner } from 'react-bootstrap';

const SingleComment = ({ comment, onCommentUpdated }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNzU5NDM4MzRiZjAwMTUwMDA5MzAiLCJpYXQiOjE3NDM5Mzc1NTcsImV4cCI6MTc0NTE0NzE1N30.86cNVMAt6MCMIzlalsGu-KjpJL7ydsfnNlJUdfbtE5s'
        }
      });
      if (response.ok) {
        onCommentUpdated();
      } else {
        setError('Failed to delete comment');
      }
    } catch (error) {
      setError('Error deleting comment');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${comment._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNzU5NDM4MzRiZjAwMTUwMDA5MzAiLCJpYXQiOjE3NDM5Mzc1NTcsImV4cCI6MTc0NTE0NzE1N30.86cNVMAt6MCMIzlalsGu-KjpJL7ydsfnNlJUdfbtE5s'
        },
        body: JSON.stringify({
          comment: editedComment,
          rate: editedRate
        })
      });
      if (response.ok) {
        setIsEditing(false);
        onCommentUpdated();
      } else {
        const errorMessage = response.status === 401 
          ? 'Authorization error. Please check your credentials.'
          : response.status === 404
          ? 'Comment not found.'
          : 'Failed to update comment. Please try again.';
        setError(errorMessage);
      }
    } catch (error) {
      setError('Network error. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isEditing) {
    return (
      <Card className="mb-3">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Select 
                value={editedRate}
                onChange={(e) => setEditedRate(parseInt(e.target.value))}
              >
                {[1, 2, 3, 4, 5].map(num => (
                  <option key={num} value={num}>{num} stars</option>
                ))}
              </Form.Select>
            </Form.Group>
            <div className="d-flex gap-2">
              <Button onClick={handleUpdate} disabled={isLoading}>
                {isLoading ? <Spinner size="sm" animation="border" /> : 'Save'}
              </Button>
              <Button variant="secondary" onClick={() => setIsEditing(false)}>Cancel</Button>
            </div>
          </Form>
          {error && <div className="text-danger mt-2">{error}</div>}
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Text>{comment.comment}</Card.Text>
        <Card.Text className="text-muted">Rating: {comment.rate}/5</Card.Text>
        <div className="d-flex gap-2">
          <Button variant="primary" size="sm" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? <Spinner size="sm" animation="border" /> : 'Delete'}
          </Button>
        </div>
        {error && <div className="text-danger mt-2">{error}</div>}
      </Card.Body>
    </Card>
  );
};

export default SingleComment;