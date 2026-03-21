const ProductSchema = require('./product.schema');

const getAllProducts = async (filters = {}, page = 1, limit = 10) => {
  const query = {};

  if (filters.userId) query.userId = filters.userId

  if (filters.onSale === 'true' || filters.onSale === true) {
    query.onSale = true;
  }

  if (filters.category) {
    const cleanCategory = filters.category.trim();
    query.category = { $regex: `^${cleanCategory}$`, $options: 'i' };
  }

  if (filters.title) query.title = { $regex: filters.title, $options: 'i' };

  if (filters.minPrice || filters.maxPrice) {
    query.price = {};
    if (filters.minPrice) query.price.$gte = Number(filters.minPrice);
    if (filters.maxPrice) query.price.$lte = Number(filters.maxPrice);
  }

  const [products, total] = await Promise.all([
    ProductSchema.find(query)
      .limit(limit)
      .skip((page - 1) * limit)
      .sort({ createdAt: -1 }),
    ProductSchema.countDocuments(query)
  ]);

  return {
    products,
    total,
    pages: Math.ceil(total / limit),
    currentPage: Number(page)
  };
};

const getProductById = async (id) => await ProductSchema.findById(id);

const getPopularCategories = async (limit = 20) => {
  return await ProductSchema.aggregate([
    { $group: { _id: "$category", count: { $sum: 1 } } },
    { $sort: { count: -1 } },
    { $limit: limit },
    { $project: { _id: 0, name: "$_id", count: 1 } }
  ]);
};

const createProduct = async (productData) => {
  const newProduct = new ProductSchema(productData);
  return await newProduct.save();
};

const updateProduct = async (id, data) => {
  return await ProductSchema.findByIdAndUpdate(id, data, {
    returnDocument: 'after',
    runValidators: true
  });
};

const deleteProduct = async (id) => await ProductSchema.findByIdAndDelete(id);

module.exports = {
  getAllProducts,
  getProductById,
  getPopularCategories,
  createProduct,
  updateProduct,
  deleteProduct
};