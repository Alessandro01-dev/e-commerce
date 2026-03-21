import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Rating } from '@mantine/core';
import useReviews from '../../../hooks/useReviews';
import { useAuth } from '../../../contexts/AuthContext';

const AddReview = ({ productId }) => {
  const { authData } = useAuth();
  const { addReview, reviewsIsLoading, reviewsError } = useReviews();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview(productId, { comment, rating });
      setComment('');
      setRating(5);
    } catch (err) {}
  };

  if (!authData) return <Alert variant="light" className='text-center'>Please login to write a review.</Alert>;

  return (
    <Form onSubmit={handleSubmit} className="border p-4 rounded bg-white shadow-sm mt-4">
      <h5 className="mb-3">Leave a Review</h5>
      
      {reviewsError && <Alert variant="danger" className="py-2 small">{reviewsError}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label className="small fw-bold">Your Rating</Form.Label>
        <Rating 
          value={rating} 
          onChange={setRating} 
          size="lg" 
          color="yellow" 
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="small fw-bold">Comment</Form.Label>
        <Form.Control 
          as="textarea" 
          rows={3} 
          placeholder="Share your experience..." 
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="dark" type="submit" disabled={reviewsIsLoading}>
        {reviewsIsLoading ? "Submitting..." : "Submit Review"}
      </Button>
    </Form>
  );
};

export default AddReview
