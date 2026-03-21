const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    dob: {
      type: Date,
    },
    avatar: {
      type: String,
      default: "https://img.freepik.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3485.jpg?w=360"
    },
    cart: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId, ref: "product"
        },
        quantity: {
          type: Number,
          default: 1
        },
      }
    ],
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product"
      }
    ]
  },
  { timestamps: true, strict: true },
);

User.pre("save", async function () {
  if (!this.isModified("password")) {
    return
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw error
  }
})

User.pre("findOneAndUpdate", async function () {
  const update = this.getUpdate()
  if (!update) {
    return;
  }
  const plainPassword = update.password ?? update.$set.password;
  if (!plainPassword) return;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(plainPassword, salt);

  if (update.password) {
    update.password = hashed;
  }

  if (update.$set.password) {
    update.$set.password = hashed;
  }
  this.setUpdate(update);
})

module.exports = mongoose.model("user", User, "users");