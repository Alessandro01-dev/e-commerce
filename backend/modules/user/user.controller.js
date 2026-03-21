const UserNotFoundException = require('../../exceptions/user/UserNotFoundException');
const userService = require('./user.service')

const getUserById = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const user = await userService.getUserById(userId);

    if (!user) {
      throw new UserNotFoundException()
    }
    res.status(200).send({
      statusCode: 200,
      user
    });
  } catch (error) {
    next(error);
  }
}

const createUser = async (req, res, next) => {
  const { body } = req
  try {
    const existingUserEmail = await userService.getUserByEmail(body.email)
    if (existingUserEmail) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Email already exists'
      })
    }
    const newUser = await userService.createUser(body)
    res.status(201).send({
      statusCode: 201,
      message: 'User created successfully',
      newUser
    })
  } catch (error) {
    next(error)
  }
}

const uploadFileOnCloud = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const imgUrl = req.file.path;

    const updatedUser = await userService.updateUser(userId, { avatar: imgUrl });

    res.status(200).json({
      message: 'Avatar uploaded and saved successfully',
      img: imgUrl,
      updatedUser
    });
  } catch (error) {
    next(error);
  }
}


const updateUser = async (req, res, next) => {
  const { body } = req
  const userId = req.user.id;
  try {
    if (!userId) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Invalid params provided: user id not defined'
      })
    }

    const updatedUser = await userService.updateUser(userId, body)
    res.status(200).send({
      statusCode: 200,
      message: 'User updated successfully',
      updatedUser
    })
  } catch (error) {
    next(error)
  }
}

const deleteUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    if (!userId) {
      return res.status(400).send({
        statusCode: 400,
        message: 'Invalid params provided: user id not defined'
      })
    }
    await userService.deleteUser(userId)
    res.status(200).send({
      statusCode: 200,
      message: 'User deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}

const updateCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const updatedUser = await userService.addToCart(req.user.id, productId, quantity);
    res.status(200).json(updatedUser.cart);
  } catch (e) { next(e); }
};

const deleteFromCart = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const updatedUser = await userService.removeFromCart(req.user.id, productId);
    res.status(200).json(updatedUser.cart);
  } catch (e) { next(e); }
};

const toggleWishlist = async (req, res, next) => {
  try {
    const updatedUser = await userService.toggleWishlist(req.user.id, req.params.productId);
    res.status(200).json(updatedUser.wishlist);
  } catch (e) { next(e); }
};

module.exports = {
  getUserById,
  createUser,
  uploadFileOnCloud,
  updateUser,
  deleteUser,
  updateCart,
  deleteFromCart,
  toggleWishlist
}