const ReviewSchema = require('./review.schema');
const ProductSchema = require('../product/product.schema');

const getProductReviews = async (productId) => {
  return await ReviewSchema.find({ productId }).populate('userId', 'name surname avatar');
};

const addReview = async (userId, productId, reviewData) => {
  const review = new ReviewSchema({ userId, productId, ...reviewData });
  await review.save();

  const allReviews = await ReviewSchema.find({ productId });
  const count = allReviews.length;
  const rate = allReviews.reduce((acc, item) => acc + item.rating, 0) / count;

  await ProductSchema.findByIdAndUpdate(productId, {
    'rating.rate': rate.toFixed(1),
    'rating.count': count
  });

  return review;
};

module.exports = {
  getProductReviews,
  addReview
};