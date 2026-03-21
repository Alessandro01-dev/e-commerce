const orderService = require('./order.service');

const getUserOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getUserOrders(req.user.id);
    res.status(200).json(orders);
  } catch (error) {
    next(error);
  }
};

const checkout = async (req, res, next) => {
  try {
    const { shippingAddress } = req.body;

    const order = await orderService.createOrder(req.user.id, shippingAddress);

    const paymentIntent = await orderService.createPaymentIntent(order.totalAmount);

    res.status(201).json({
      message: "Order initiated",
      order,
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    next(error);
  }
};

const confirm = async (req, res, next) => {
  try {
    const { orderId } = req.body;
    const order = await orderService.confirmOrder(orderId, req.user.id);
    res.status(200).json({ message: "Payment confirmed and cart cleared", order });
  } catch (error) {
    next(error);
  }
};

const getPaymentSecret = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await orderService.getOrderById(orderId);

    if (!order || order.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Non autorizzato" });
    }

    if (order.status !== 'pending') {
      return res.status(400).json({ message: "L'ordine è già stato pagato o annullato" });
    }

    const paymentIntent = await orderService.createPaymentIntent(order.totalAmount);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      order
    });
  } catch (error) { next(error); }
};


const changeAddress = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { newAddress } = req.body;
    const order = await orderService.updateShippingAddress(orderId, req.user.id, newAddress);
    res.status(200).json({ message: "Address updated successfully", order });
  } catch (error) { next(error); }
};


const cancelOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const order = await orderService.updateOrderStatus(orderId, req.user.id, 'cancelled');
    res.status(200).json({ message: "Order cancelled successfully", order });
  } catch (error) { next(error); }
};


module.exports = {
  getUserOrders,
  checkout,
  confirm,
  getPaymentSecret,
  changeAddress,
  cancelOrder
};