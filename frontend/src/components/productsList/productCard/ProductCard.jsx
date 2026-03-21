import { useNavigate } from 'react-router-dom';
import classes from './ProductCard.module.css';
import { Badge } from 'react-bootstrap';
import { Rating } from '@mantine/core';
import { useAuth } from '../../../contexts/AuthContext';
import useUsers from '../../../hooks/useUsers';
import { Heart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { authData, getProfile } = useAuth();
  const { toggleWishlist } = useUsers();

  const isFavourite = authData?.wishlist?.some(item =>
    (item._id || item) === product._id
  );

  const handleWishlist = async (e) => {
    e.stopPropagation();
    if (!authData) return navigate('/login');
    await toggleWishlist(product._id);
    await getProfile();
  };

  const discountBadge = product.onSale
    ? Math.round(((product.price - product.discountPrice) / product.price) * 100)
    : null;

  return (
    <div
      className={`${classes['product-card-container']} h-100 d-flex flex-column gap-2 align-items-start p-3 border rounded shadow-sm`}
      onClick={() => navigate(`/details/${product._id}`)}
    >
      {product.onSale && (
        <Badge bg="danger" className={`${classes['overlay-element']} position-absolute top-0 start-0 m-2`}>
          -{discountBadge}%
        </Badge>
      )}

      <div
        className={`${classes['overlay-element']} position-absolute top-0 end-0 m-3`}
        onClick={handleWishlist}
      >
        <Heart
          size={22}
          fill={isFavourite ? "#ff4d4d" : "transparent"}
          color={isFavourite ? "#ff4d4d" : "#666"}
          className={classes['heart-icon']}
        />
      </div>

      <div className={`${classes['product-img-wrapper']} w-100 mb-2 rounded`}>
        <img
          className={`${classes['product-img']} w-100 h-100 object-fit-contain`}
          src={product?.image}
          alt={product.title}
        />
      </div>

      <Badge bg="secondary" className="mb-1">{product.category}</Badge>
      <h5 className="mb-1 text-truncate w-100">{product.title}</h5>

      <div className="d-flex align-items-center gap-2 mb-2">
        <Rating value={product.rating?.rate} readOnly size="xs" color="yellow" />
        <small className="text-muted">({product.rating?.count})</small>
      </div>

      <p className={`${classes['product-description']} small text-muted w-100 mb-3`}>
        {product.description}
      </p>

      <div className="mt-auto d-flex align-items-end justify-content-between w-100">
        <span className="fw-bold small text-secondary">{product.brand}</span>

        <div className="d-flex flex-column align-items-end">
          {product.onSale ? (
            <>
              <span className={`${classes['old-price']} text-muted text-decoration-line-through`}>
                {product.price} €
              </span>
              <span className="h6 m-0 text-danger fw-bold">
                {product.discountPrice} €
              </span>
            </>
          ) : (
            <span className="h6 m-0 text-primary fw-bold">{product.price} €</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;