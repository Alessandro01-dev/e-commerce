import { Rating } from '@mantine/core';

const ReviewCard = ({ review }) => {
  return (
    <div className="border-bottom py-3">
      <div className="d-flex align-items-center gap-3">
        <img src={review.userId?.avatar} width={40} className="rounded-circle" />
        <div>
          <h6 className="m-0">{review.userId?.name}</h6>
          <Rating value={review.rating} readOnly size="xs" color="yellow" />
        </div>
      </div>
      <p className="mt-2 text-secondary">{review.comment}</p>
    </div>
  );
};

export default ReviewCard