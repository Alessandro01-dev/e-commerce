const express = require('express');
const router = express.Router();
const reviewController = require('./review.controller');
const verifyToken = require('../../middlewares/auth/verifyToken');

router.get('/products/:productId/reviews', reviewController.getProductReviews);

router.post('/products/:productId/reviews', verifyToken, reviewController.addReview);

module.exports = router;