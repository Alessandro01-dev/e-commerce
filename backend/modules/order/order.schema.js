const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "product"
        },
        title: String,
        price: Number,
        quantity: Number
      }
    ],
    totalAmount: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["pending", "paid", "shipped", "delivered", "cancelled"],
      default: "pending"
    },
    shippingAddress: {
      address: String,
      city: String,
      zipCode: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", OrderSchema, "orders");