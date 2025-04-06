
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddComment = ({ bookId, onCommentAdded }) => {
  const [comment, setComment] = useState('');
  const [rate, setRate] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkNzU5NDM4MzRiZjAwMTUwMDA5MzAiLCJpYXQiOjE3NDM5Mzc1NTcsImV4cCI6MTc0NTE0NzE1N30.86cNVMAt6MCMIzlalsGu-KjpJL7ydsfnNlJUdfbtE5s'
        },
        body: JSON.stringify({
          comment,
          rate,
          elementId: bookId
        })
      });
      
      if (response.ok) {
        setComment('');
        setRate(1);
        onCommentAdded();
      } else {
        const errorMessage = response.status === 401 
          ? 'Authorization error. Please check your credentials.'
          : 'Failed to add comment. Please try again.';
        setError(errorMessage);
      }
    } catch (error) {
      setError('Network error. Please check your connection.');
      console.error('Error adding comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mt-3">
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Select 
          value={rate}
          onChange={(e) => setRate(parseInt(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <option key={num} value={num}>{num} stars</option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button 
        type="submit" 
        variant="primary"
        disabled={isSubmitting || !comment.trim()}
      >
        {isSubmitting ? 'Adding...' : 'Add Comment'}
      </Button>
    </Form>
  );
};

export default AddComment;
