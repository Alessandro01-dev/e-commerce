import { useState } from 'react'

const useProducts = () => {
  const [productsIsLoading, setProductsIsLoading] = useState(false)
  const [productsData, setProductsData] = useState(null)
  const [productsError, setProductsError] = useState(null)
  const [popularCategories, setPopularCategories] = useState([])

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getProducts = async (page = 1, limit = 10, filters = {}) => {
    setProductsIsLoading(true)
    setProductsError(null)
    try {
      const { category, title, minPrice, maxPrice, onSale } = filters

      let url = `${URL}/products?page=${page}&limit=${limit}`
      if (category) url += `&category=${encodeURIComponent(category)}`
      if (title) url += `&title=${encodeURIComponent(title)}`
      if (minPrice) url += `&minPrice=${minPrice}`
      if (maxPrice) url += `&maxPrice=${maxPrice}`
      if (onSale) url += `&onSale=true`

      const response = await fetch(url)

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message || "Failed to fetch products")
      }

      const data = await response.json()

      setProductsData(prev => ({
        ...data,
        products: page === 1 ? data.products : [...(prev?.products || []), ...data.products]
      }))

      return data
    } catch (error) {
      setProductsError(error.message)
    } finally {
      setProductsIsLoading(false)
    }
  }

  const getProductById = async (productId) => {
    setProductsIsLoading(true)
    setProductsError(null)
    try {
      const response = await fetch(`${URL}/products/${productId}`)

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      const data = await response.json()
      return data
    } catch (error) {
      setProductsError(error.message)
    } finally {
      setProductsIsLoading(false)
    }
  }

  const getMyProducts = async (page = 1, limit = 10) => {
    setProductsIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/products/me?page=${page}&limit=${limit}`, {
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await response.json();
      setProductsData(data);
      return data;
    } catch (error) {
      setProductsError(error.message);
    } finally {
      setProductsIsLoading(false);
    }
  };

  const clearProducts = () => setProductsData(null);

  const getPopularCategories = async () => {
    try {
      const response = await fetch(`${URL}/products/popular-categories`);
      const data = await response.json();
      setPopularCategories(data);
    } catch (error) {
      setProductsError(error.message);
    }
  };

  const createProduct = async (newProduct) => {
    setProductsIsLoading(true)
    setProductsError(null)
    try {
      const token = localStorage.getItem('token')

      const response = await fetch(`${URL}/products`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        body: newProduct
      });

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      return await response.json()
    } catch (error) {
      setProductsError(error.message)
      throw error
    } finally {
      setProductsIsLoading(false)
    }
  }

  const updateProduct = async (productId, updatedData) => {
    setProductsIsLoading(true);
    setProductsError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/products/${productId}`, {
        method: "PUT",
        headers: {
          "Authorization": `Bearer ${token}`
        },
        body: updatedData
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      return await response.json();
    } catch (error) {
      setProductsError(error.message);
      throw error;
    } finally {
      setProductsIsLoading(false);
    }
  };

  const deleteProduct = async (productId) => {
    setProductsIsLoading(true)
    setProductsError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message)
      }

      return await response.json()
    } catch (error) {
      setProductsError(error.message)
    } finally {
      setProductsIsLoading(false)
    }
  }

  return {
    productsIsLoading,
    productsData,
    productsError,
    popularCategories,
    setProductsError,
    getProducts,
    getProductById,
    getMyProducts,
    getPopularCategories,
    clearProducts,
    createProduct,
    updateProduct,
    deleteProduct
  }
}

export default useProducts