import { Container } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import useUsers from '../hooks/useUsers';
import MainLayout from '../components/mainLayout/MainLayout';
import WishlistItemsList from '../components/wishlistItemsList/WishlistItemsList';

const WishlistPage = () => {
  const { authData, getProfile } = useAuth();
  const { addToCart, toggleWishlist } = useUsers();

  const handleMoveToCart = async (productId) => {
    await addToCart(productId, 1);
    await toggleWishlist(productId);
    await getProfile();
  };

  const handleRemove = async (productId) => {
    await toggleWishlist(productId);
    await getProfile();
  };

  return (
    <MainLayout>
      <Container className="mt-5">
        <h2 className="mb-4">My Wishlist</h2>
        <WishlistItemsList 
          items={authData?.wishlist} 
          onMoveToCart={handleMoveToCart}
          onRemove={handleRemove}
        />
      </Container>
    </MainLayout>
  );
};

export default WishlistPage;