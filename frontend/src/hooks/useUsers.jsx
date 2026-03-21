import { useState } from 'react'

const useUsers = () => {
  const [usersIsLoading, setUsersIsLoading] = useState(false)
  const [usersData, setUsersData] = useState(null)
  const [usersError, setUsersError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getUserById = async (userId) => {
    setUsersIsLoading(true)
    setUsersError(null)
    try {
      const response = await fetch(`${URL}/users/${userId}`)
      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message || "Failed to fetch user")
      }
      const data = await response.json()
      setUsersData(data.user)
      return data.user
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  const registerUser = async (userData) => {
    setUsersIsLoading(true)
    setUsersError(null)
    try {
      const response = await fetch(`${URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || "Registration failed")
      return data
    } catch (error) {
      setUsersError(error.message)
      throw error
    } finally {
      setUsersIsLoading(false)
    }
  }

  const updateUser = async (updatedData) => {
    setUsersIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(updatedData)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      return data;
    } catch (error) {
      setUsersError(error.message);
      throw error;
    } finally {
      setUsersIsLoading(false);
    }
  };

  const updateAvatar = async (file) => {
    setUsersIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const formData = new FormData();
      formData.append('avatar', file);

      const response = await fetch(`${URL}/me/avatar`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${token}` },
        body: formData
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      return data;
    } catch (error) {
      setUsersError(error.message);
      throw error;
    } finally {
      setUsersIsLoading(false);
    }
  };

  const deleteAccount = async () => {
    setUsersIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/me`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      });
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      localStorage.removeItem('token');
      return true;
    } catch (error) {
      setUsersError(error.message);
      throw error;
    } finally {
      setUsersIsLoading(false);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    setUsersIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ productId, quantity })
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  const deleteFromCart = async (productId) => {
    setUsersIsLoading(true)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/cart/${productId}`, {
        method: "DELETE",
        headers: { "Authorization": `Bearer ${token}` }
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data.message)
      return data
    } catch (error) {
      setUsersError(error.message)
    } finally {
      setUsersIsLoading(false)
    }
  }

  const toggleWishlist = async (productId) => {
    setUsersIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/wishlist/${productId}`, {
        method: "POST",
        headers: { "Authorization": `Bearer ${token}` }
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      return data;
    } catch (error) {
      setUsersError(error.message);
    } finally {
      setUsersIsLoading(false);
    }
  };

  return {
    usersIsLoading,
    usersData,
    usersError,
    setUsersError,
    getUserById,
    registerUser,
    updateUser,
    updateAvatar,
    deleteAccount,
    addToCart,
    deleteFromCart,
    toggleWishlist
  }
}

export default useUsers