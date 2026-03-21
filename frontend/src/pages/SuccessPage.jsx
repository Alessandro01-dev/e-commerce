import { Container, Button } from 'react-bootstrap';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '../components/mainLayout/MainLayout';

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <Container className="text-center py-5 mt-5">
        <CheckCircle size={80} className="text-success mb-4" />
        <h1 className="display-4 fw-bold">Payment Successful!</h1>
        <p className="lead text-muted mb-5">Thank you for your purchase. Your order has been confirmed.</p>
        <div className="d-flex gap-3 justify-content-center">
          <Button variant="dark" size="lg" onClick={() => navigate('/orders')}>
            View My Orders
          </Button>
          <Button variant="outline-dark" size="lg" onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </div>
      </Container>
    </MainLayout>
  );
};
export default SuccessPage;