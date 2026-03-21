import { useEffect } from 'react';
import { Container, Table, Badge, Spinner, Alert, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/mainLayout/MainLayout';
import useOrders from '../hooks/useOrders';

const OrdersHistoryPage = () => {
  const navigate = useNavigate();
  const {
    getUserOrders,
    getOrderSecret,
    cancelOrder,
    ordersData,
    ordersIsLoading,
    ordersError
  } = useOrders();

  useEffect(() => {
    getUserOrders();
  }, []);

  const handleRetryPayment = async (orderId) => {
    try {
      const data = await getOrderSecret(orderId);

      navigate('/payment', {
        state: {
          clientSecret: data.clientSecret,
          orderId: data.order._id,
          amount: data.order.totalAmount
        }
      });
    } catch (err) {
      alert("Error retrieving payment information: " + err.message);
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      paid: 'success',
      pending: 'warning',
      shipped: 'info',
      delivered: 'primary',
      cancelled: 'danger'
    };
    return <Badge bg={variants[status] || 'secondary'}>{status.toUpperCase()}</Badge>;
  };

  const handleCancelOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to cancel this order? The items will be returned to stock.")) {
      try {
        await cancelOrder(orderId);
      } catch (err) {
        alert("Error cancelling order: " + err.message);
      }
    }
  };

  return (
    <MainLayout>
      <Container className="mt-5">
        <h2 className="mb-4">My Orders</h2>

        {ordersIsLoading && <Spinner animation="border" />}
        {ordersError && <Alert variant="danger">{ordersError}</Alert>}

        {!ordersIsLoading && ordersData?.length === 0 && (
          <p className="text-muted">You haven't placed any orders yet.</p>
        )}

        {!ordersIsLoading && ordersData?.length > 0 && (
          <Table responsive hover className="align-middle shadow-sm p-3 bg-white rounded">
            <thead className="bg-light">
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th className="text-end">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order) => (
                <tr key={order._id}>
                  <td className="text-muted small">#{order._id.slice(-6)}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td className="fw-bold">{order.totalAmount.toFixed(2)} $</td>
                  <td>{getStatusBadge(order.status)}</td>
                  <td className="text-end">
                    {order.status === 'pending' && (
                      <div className="d-flex gap-2 justify-content-end">
                        <Button
                          variant="dark"
                          size="sm"
                          onClick={() => handleRetryPayment(order._id)}
                        >
                          Complete Payment
                        </Button>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleCancelOrder(order._id)}
                        >
                          Cancel
                        </Button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
    </MainLayout>
  );
};

export default OrdersHistoryPage;