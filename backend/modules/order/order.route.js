const express = require('express');
const router = express.Router();
const orderController = require('./order.controller');
const verifyToken = require('../../middlewares/auth/verifyToken');

router.get('/orders/me', verifyToken, orderController.getUserOrders);
router.get('/orders/:orderId/secret', verifyToken, orderController.getPaymentSecret);

router.post('/orders/checkout', verifyToken, orderController.checkout);
router.post('/orders/confirm', verifyToken, orderController.confirm);

router.patch('/orders/:orderId/address', verifyToken, orderController.changeAddress);
router.patch('/orders/:orderId/cancel', verifyToken, orderController.cancelOrder);

module.exports = router;