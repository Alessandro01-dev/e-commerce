const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true
    },
    comment: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5
    },
  },
  { timestamps: true }
);

ReviewSchema.index({ userId: 1, productId: 1 }, { unique: true });

module.exports = mongoose.model("review", ReviewSchema, "reviews");