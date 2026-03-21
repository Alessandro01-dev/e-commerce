const UserSchema = require('./user.schema')

const getUserByEmail = async (email) => {
  return await UserSchema.findOne({ email })
}

const getUserById = async (userId) => {
  return await UserSchema.findById(userId)
    .populate('cart.productId')
    .populate('wishlist');
}

const createUser = async (body) => {
  const newUser = new UserSchema(body)
  return await newUser.save()
}

const updateUser = async (userId, body) => {
  const options = {
    new: true,
    runValidators: true
  }
  return await UserSchema.findByIdAndUpdate(userId, body, options)
}

const deleteUser = async (userId) => {
  return await UserSchema.findByIdAndDelete(userId)
}

const addToCart = async (userId, productId, quantity = 1) => {
  const user = await UserSchema.findById(userId);

  const itemIndex = user.cart.findIndex(product => product.productId.toString() === productId);

  if (itemIndex > -1) {
    user.cart[itemIndex].quantity += quantity;
  } else {
    user.cart.push({ productId, quantity });
  }

  return await user.save();
};

const removeFromCart = async (userId, productId) => {
  return await UserSchema.findByIdAndUpdate(
    userId,
    { $pull: { cart: { productId: productId } } },
    { new: true }
  ).populate('cart.productId');
};

const toggleWishlist = async (userId, productId) => {
  const user = await UserSchema.findById(userId);

  const isPresent = user.wishlist.some(id => id.toString() === productId);

  if (isPresent) {

    user.wishlist = user.wishlist.filter(id => id.toString() !== productId);
  } else {
    user.wishlist.push(productId);
  }

  await user.save();

  return await UserSchema.findById(userId).populate('wishlist');
};


module.exports = {
  getUserByEmail,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addToCart,
  removeFromCart,
  toggleWishlist
}