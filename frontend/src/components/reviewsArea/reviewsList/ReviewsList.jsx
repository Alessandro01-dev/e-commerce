import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Alert, Row, Col } from 'react-bootstrap';
import useReviews from '../../../hooks/useReviews';
import ReviewCard from './reviewCard/ReviewCard';

const ReviewsList = () => {
  const { productId } = useParams();
  const { getProductReviews, reviewsData, reviewsIsLoading, reviewsError } = useReviews();

  useEffect(() => {
    if (productId) getProductReviews(productId);
  }, [productId]);

  return (
    <section className="mt-5 pb-5">
      <div className="d-flex align-items-center gap-2 mb-4">
        <h2 className="m-0">Customer Reviews</h2>
      </div>

      {reviewsIsLoading ? (
        <div className="text-center py-4"><Spinner animation="border" variant="dark" /></div>
      ) : reviewsError ? (
        <Alert variant="danger">{reviewsError}</Alert>
      ) : reviewsData.length > 0 ? (
        <Row className="g-4">
          {reviewsData.map((review) => (
            <Col xs={12} key={review._id}>
              <ReviewCard review={review} />
            </Col>
          ))}
        </Row>
      ) : (
        <Alert variant="light" className="border text-center py-4">
          No reviews yet for this product. Be the first to share your thoughts!
        </Alert>
      )}
    </section>
  );
};

export default ReviewsList;