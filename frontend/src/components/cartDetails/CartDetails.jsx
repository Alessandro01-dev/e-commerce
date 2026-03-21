import { Container, Row, Col, Table, Button, Image, Card, Badge } from 'react-bootstrap';
import { Trash2 } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import useUsers from '../../hooks/useUsers';
import useOrders from '../../hooks/useOrders';
import { useNavigate } from 'react-router-dom';
import classes from './CartDetails.module.css';

const CartDetails = () => {
  const { authData, getProfile } = useAuth();
  const { deleteFromCart } = useUsers();
  const { checkout, ordersIsLoading } = useOrders();
  const navigate = useNavigate();
  
  const subtotal = authData?.cart?.reduce((acc, item) => {
    const currentPrice = item.productId.onSale ? item.productId.discountPrice : item.productId.price;
    return acc + (currentPrice * item.quantity);
  }, 0) || 0;

  const handleRemove = async (productId) => {
    await deleteFromCart(productId);
    await getProfile();
  };

  const handleCheckout = async () => {
    const shippingAddress = {
      address: "Via Roma 1",
      city: "Roma",
      zipCode: "00100"
    };

    try {
      const data = await checkout(shippingAddress);
      navigate('/payment', {
        state: {
          clientSecret: data.clientSecret,
          orderId: data.order._id,
          amount: data.order.totalAmount
        }
      });
    } catch (err) {
      alert(err.message);
    }
  };

  if (!authData?.cart || authData.cart.length === 0) {
    return (
      <Container className="text-center py-5">
        <Row className='w-100 justify-content-center'>
          <Col>
            <div className='d-flex flex-column align-items-center justify-content-center gap-2'>
              <div className={classes['empty-cart-img-container']}>
                <img className='w-100 d-block object-fit-cover' src="https://cdn-icons-png.flaticon.com/512/4555/4555971.png" alt="empty cart" />
              </div>
              <h3>Your cart is empty</h3>
              <Button variant="dark" className="mt-3" onClick={() => navigate('/')}>
                Go Shopping
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <Row>
        <Col lg={8}>
          <Table responsive className="align-middle">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {authData.cart.map((item) => {
                const isSale = item.productId.onSale;
                const price = isSale ? item.productId.discountPrice : item.productId.price;
                
                return (
                  <tr key={item.productId._id}>
                    <td className="d-flex align-items-center gap-3">
                      <Image src={item.productId.image} width={60} height={60} thumbnail className="object-fit-cover" />
                      <div>
                        <div className="fw-bold">{item.productId.title}</div>
                        {isSale && <Badge bg="danger" className={classes['sale-badge']}>SALE</Badge>}
                      </div>
                    </td>
                    <td>
                      {isSale ? (
                        <div className="d-flex flex-column">
                          <span className="fw-bold text-danger">{price.toFixed(2)} €</span>
                          <span className="text-muted text-decoration-line-through small">{item.productId.price.toFixed(2)} €</span>
                        </div>
                      ) : (
                        <span>{price.toFixed(2)} €</span>
                      )}
                    </td>
                    <td>{item.quantity}</td>
                    <td className="fw-bold">{(price * item.quantity).toFixed(2)} €</td>
                    <td>
                      <Button variant="outline-danger" size="sm" onClick={() => handleRemove(item.productId._id)}>
                        <Trash2 size={16} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>

        <Col lg={4}>
          <Card className="p-4 border-0 shadow-sm bg-light">
            <h4>Summary</h4>
            <hr />
            <div className="d-flex justify-content-between mb-3">
              <span>Subtotal</span>
              <span className="fw-bold">{subtotal.toFixed(2)} €</span>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <span>Shipping</span>
              <span className="text-success fw-bold">Free</span>
            </div>
            <Button
              variant="dark"
              className="w-100 py-3"
              onClick={handleCheckout}
              disabled={ordersIsLoading}
            >
              {ordersIsLoading ? "Processing..." : "Place Order"}
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CartDetails;