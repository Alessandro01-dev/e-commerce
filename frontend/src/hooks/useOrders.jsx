import { useState } from 'react'

const useOrders = () => {
  const [ordersIsLoading, setOrdersIsLoading] = useState(false)
  const [ordersData, setOrdersData] = useState([])
  const [ordersError, setOrdersError] = useState(null)

  const URL = import.meta.env.VITE_BASE_SERVER_URL

  const getUserOrders = async () => {
    setOrdersIsLoading(true)
    setOrdersError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/orders/me`, {
        headers: { "Authorization": `Bearer ${token}` }
      })

      if (!response.ok) {
        const errorResponse = await response.json()
        throw new Error(errorResponse.message || "Failed to fetch orders")
      }

      const data = await response.json()
      setOrdersData(data)
      return data
    } catch (error) {
      setOrdersError(error.message)
    } finally {
      setOrdersIsLoading(false)
    }
  }

  const checkout = async (shippingAddress) => {
    setOrdersIsLoading(true);
    setOrdersError(null);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/orders/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ shippingAddress })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Checkout failed");

      return data;
    } catch (error) {
      setOrdersError(error.message);
      throw error;
    } finally {
      setOrdersIsLoading(false);
    }
  };

  const confirmOrderPayment = async (orderId) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${URL}/orders/confirm`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ orderId })
      });
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const getOrderSecret = async (orderId) => {
    const token = localStorage.getItem('token');
    const response = await fetch(`${URL}/orders/${orderId}/secret`, {
      headers: { "Authorization": `Bearer ${token}` }
    });
    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data;
  };

  const changeAddress = async (orderId, newAddress) => {
    setOrdersIsLoading(true)
    setOrdersError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/orders/${orderId}/address`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ newAddress })
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message)

      await getUserOrders()
      return data
    } catch (error) {
      setOrdersError(error.message)
      throw error
    } finally {
      setOrdersIsLoading(false)
    }
  }

  const cancelOrder = async (orderId) => {
    setOrdersIsLoading(true)
    setOrdersError(null)
    try {
      const token = localStorage.getItem('token')
      const response = await fetch(`${URL}/orders/${orderId}/cancel`, {
        method: "PATCH",
        headers: { "Authorization": `Bearer ${token}` }
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.message)

      await getUserOrders()
      return data
    } catch (error) {
      setOrdersError(error.message)
    } finally {
      setOrdersIsLoading(false)
    }
  }

  return {
    ordersIsLoading,
    ordersData,
    ordersError,
    setOrdersError,
    getUserOrders,
    checkout,
    confirmOrderPayment,
    getOrderSecret,
    changeAddress,
    cancelOrder
  }
}

export default useOrders