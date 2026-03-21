import { useState } from 'react'

const useReviews = () => {
  const [reviewsIsLoading, setReviewsIsLoading] = useState(false)
  const [reviewsData, setReviewsData] = useState([])
  const [reviewsError, setReviewsError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getProductReviews = async (productId) => {
    setReviewsIsLoading(true)
    setReviewsError(null)
    try {
      const response = await fetch(`${URL}/products/${productId}/reviews`)
      
      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message || "Failed to fetch reviews")
      }

      const data = await response.json()
      setReviewsData(data)
      return data
    } catch (error) {
      setReviewsError(error.message)
    } finally {
      setReviewsIsLoading(false)
    }
  }

  const addReview = async (productId, reviewData) => {
    setReviewsIsLoading(true)
    setReviewsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/products/${productId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(reviewData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to add review")
      }
      
      await getProductReviews(productId)
      
      return data
    } catch (error) {
      setReviewsError(error.message)
      throw error
    } finally {
      setReviewsIsLoading(false)
    }
  }

  return {
    reviewsIsLoading,
    reviewsData,
    reviewsError,
    setReviewsError,
    getProductReviews,
    addReview
  }
}

export default useReviews