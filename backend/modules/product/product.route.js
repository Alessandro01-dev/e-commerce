const express = require('express');
const router = express.Router();
const productController = require('./product.controller');
const { cloudUpload } = require('../../middlewares/upload');
const verifyToken = require('../../middlewares/auth/verifyToken');

router.get('/products', productController.getProducts);
router.get('/products/me', verifyToken, productController.getLoggedUserProducts);
router.get('/products/popular-categories', productController.getPopularCategories);
router.get('/products/:productId', productController.getSingleProduct);

router.post('/products', verifyToken, cloudUpload.single('image'), productController.addProduct);

router.put('/products/:productId', verifyToken, cloudUpload.single('image'), productController.updateProduct);

router.delete('/products/:productId', verifyToken, productController.deleteProduct);


module.exports = router;
