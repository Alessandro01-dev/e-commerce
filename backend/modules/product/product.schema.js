const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    onSale: {
      type: Boolean,
      default: false
    },
    discountPrice: {
      type: Number,
      default: null
    },
    category: {
      type: String,
      required: true
    },
    brand: {
      type: String
    },
    image: {
      type: String, required: true
    },
    stock: {
      type: Number,
      default: 0
    },
    rating: {
      rate: {
        type: Number,
        default: 0
      },
      count: {
        type: Number,
        default: 0
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", ProductSchema, "products");
