import { useParams } from "react-router-dom"
import AddReview from "./addReview/AddReview"
import ReviewsList from "./reviewsList/ReviewsList"

const ReviewsArea = () => {
  const { productId } = useParams()

  return (
    <>
      <AddReview productId={productId} />
      <ReviewsList />
    </>
  )
}

export default ReviewsArea