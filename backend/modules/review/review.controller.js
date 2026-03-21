const reviewService = require('./review.service');

const getProductReviews = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const reviews = await reviewService.getProductReviews(productId);
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

const addReview = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { comment, rating } = req.body;
    const userId = req.user.id;

    const newReview = await reviewService.addReview(userId, productId, { comment, rating });

    res.status(201).json({
      message: "Review added successfully",
      newReview
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "You have already reviewed this product" });
    }
    next(error);
  }
};

module.exports = {
  getProductReviews,
  addReview
};
