const OrderSchema = require('./order.schema');
const ProductSchema = require('../product/product.schema');
const UserSchema = require('../user/user.schema');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const getUserOrders = async (userId) => {
  return await OrderSchema.find({ userId }).sort({ createdAt: -1 });
};

const getOrderById = async (id) => await OrderSchema.findById(id);

const createOrder = async (userId, shippingAddress) => {
  const user = await UserSchema.findById(userId).populate('cart.productId');

  if (!user.cart || user.cart.length === 0) throw new Error("Cart is empty");

  let totalAmount = 0;
  const orderProducts = [];

  for (const item of user.cart) {
    const product = await ProductSchema.findById(item.productId);

    if (!product) {
      throw new Error(`Product ${item.productId} not found`);
    }

    if (product.stock < item.quantity) {
      throw new Error(`Insufficient stock for: ${product.title}. Remaining: ${product.stock}`);
    }

    const finalPrice = product.onSale ? product.discountPrice : product.price;

    const updatedProduct = await ProductSchema.findOneAndUpdate(
      {
        _id: item.productId,
        stock: { $gte: item.quantity }
      },
      { $inc: { stock: -item.quantity } },
      { new: true }
    );

    if (!updatedProduct) {
      throw new Error(`Sorry, stock for ${product.title} just ran out!`);
    }

    totalAmount += finalPrice * item.quantity;

    orderProducts.push({
      productId: product._id,
      title: product.title,
      price: finalPrice,
      quantity: item.quantity
    });
  }

  const newOrder = new OrderSchema({
    userId,
    products: orderProducts,
    totalAmount: Number(totalAmount.toFixed(2)),
    shippingAddress
  });

  await newOrder.save();
  return newOrder;
};

const confirmOrder = async (orderId, userId) => {
  const order = await OrderSchema.findOne({ _id: orderId, userId });
  if (!order) throw new Error("Order not found");

  if (order.status === 'paid') return order;

  order.status = 'paid';
  await order.save();

  await UserSchema.findByIdAndUpdate(userId, { $set: { cart: [] } });

  return order;
};

const updateOrderStatus = async (orderId, userId, status) => {
  const order = await OrderSchema.findOne({ _id: orderId, userId });
  if (!order) throw new Error("Order not found");

  if (status === 'cancelled' && order.status === 'pending') {
    for (const item of order.products) {
      await ProductSchema.findByIdAndUpdate(item.productId, {
        $inc: { stock: item.quantity }
      });
    }
  }

  order.status = status;
  return await order.save();
};

const updateShippingAddress = async (orderId, userId, newAddress) => {
  const order = await OrderSchema.findOne({ _id: orderId, userId });
  if (!order) throw new Error("Order not found");
  if (order.status !== 'pending') throw new Error("Cannot change address of a processed order");

  order.shippingAddress = newAddress;
  return await order.save();
};


const cancelOrderAndRestoreStock = async (orderId) => {
  const order = await OrderSchema.findById(orderId);
  if (order.status === 'pending') {
    for (const item of order.products) {
      await ProductSchema.findByIdAndUpdate(item.productId, {
        $inc: { stock: item.quantity }
      });
    }
    order.status = 'cancelled';
    await order.save();
  }
};

const createPaymentIntent = async (amount) => {
  return await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: 'eur',
    payment_method_types: ['card'],
  });
};


module.exports = {
  getUserOrders,
  getOrderById,
  createOrder,
  confirmOrder,
  updateOrderStatus,
  updateShippingAddress,
  cancelOrderAndRestoreStock,
  createPaymentIntent
};
