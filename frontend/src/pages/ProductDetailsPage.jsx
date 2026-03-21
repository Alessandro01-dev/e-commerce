import { useNavigate } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { ChevronLeft } from 'lucide-react';
import MainLayout from "../components/mainLayout/MainLayout";
import ProductDetails from "../components/productDetails/ProductDetails";
import ReviewsArea from '../components/reviewsArea/ReviewsArea';

const ProductDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <Container className="mt-4">
        <Button 
          variant="link" 
          className="text-dark p-0 mb-4 d-flex align-items-center gap-1 text-decoration-none"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft size={20} /> Back to products
        </Button>

        <ProductDetails />
        <hr className="my-5" />
        <ReviewsArea />
      </Container>
    </MainLayout>
  );
};

export default ProductDetailsPage;