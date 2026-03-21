const express = require('express')
const router = express.Router()
const userController = require('./user.controller')
const { cloudUpload } = require('../../middlewares/upload');
const verifyToken = require('../../middlewares/auth/verifyToken');


router.get('/users/:userId', userController.getUserById);
router.post('/users', userController.createUser);
router.post('/wishlist/:productId', verifyToken, userController.toggleWishlist);

router.patch("/me/avatar", verifyToken, cloudUpload.single('avatar'), userController.uploadFileOnCloud);
router.patch('/me', verifyToken, userController.updateUser);
router.delete('/me', verifyToken, userController.deleteUser);

router.post('/cart', verifyToken, userController.updateCart);
router.delete('/cart/:productId', verifyToken, userController.deleteFromCart);

module.exports = router