const productService = require('./product.service');

const getProducts = async (req, res, next) => {
  try {
    const { category, minPrice, maxPrice, title, onSale, page = 1, limit = 10 } = req.query;

    const result = await productService.getAllProducts(
      { category, minPrice, maxPrice, title, onSale },
      page,
      limit
    );

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getSingleProduct = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.status(200).json(product);
  } catch (e) {
    next(e);
  }
};

const getLoggedUserProducts = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { page = 1, limit = 10 } = req.query;

    const result = await productService.getAllProducts(
      { userId },
      page,
      limit
    );

    res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const getPopularCategories = async (req, res, next) => {
  try {
    const categories = await productService.getPopularCategories(20);
    res.status(200).json(categories);
  } catch (e) {
    next(e);
  }
};

const addProduct = async (req, res, next) => {
  try {
    const productData = {
      ...req.body,
      userId: req.user.id,
      image: req.file ? req.file.path : req.body.image
    };
    const product = await productService.createProduct(productData);
    res.status(201).json(product);
  } catch (e) {
    next(e);
  }
};

const updateProduct = async (req, res, next) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);
  try {
    const product = await productService.getProductById(req.params.productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    const updateData = {
      title: req.body.title || product.title,
      description: req.body.description || product.description,
      brand: req.body.brand || product.brand,
      category: req.body.category || product.category,
      price: req.body.price ? Number(req.body.price) : product.price,
      stock: req.body.stock ? Number(req.body.stock) : product.stock,
      image: req.file ? req.file.path : product.image
    };

    const updated = await productService.updateProduct(req.params.productId, updateData);
    res.status(200).json(updated);
  } catch (e) {
    console.error("Errore durante l'update:", e);
    next(e);
  }
};


const deleteProduct = async (req, res, next) => {
  try {
    const product = await productService.getProductById(req.params.productId);

    if (!product) return res.status(404).json({ message: "Prodotto non trovato" });

    if (product.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Non sei autorizzato a eliminare questo prodotto" });
    }

    await productService.deleteProduct(req.params.productId);
    res.status(200).json({ message: "Prodotto eliminato con successo" });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  getLoggedUserProducts,
  getPopularCategories,
  addProduct,
  updateProduct,
  deleteProduct
};
