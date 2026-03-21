import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Row, Col, Spinner, Badge, Button } from 'react-bootstrap';
import classes from './ProductDetails.module.css';
import useProducts from '../../hooks/useProducts';
import { useAuth } from '../../contexts/AuthContext';
import useUsers from '../../hooks/useUsers';

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { authData, getProfile } = useAuth();
  const { addToCart, usersIsLoading } = useUsers();
  const { getProductById, productsIsLoading } = useProducts();

  const [product, setProduct] = useState(null);

  const imgRef = useRef(null);
  const lensRef = useRef(null);
  const [showLens, setShowLens] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProductById(productId);
      setProduct(data);
    };
    loadProduct();
  }, [productId]);

  const handleMouseMove = (e) => {
    const img = imgRef.current;
    const lens = lensRef.current;
    if (!img || !lens) return;

    const rect = img.getBoundingClientRect();

    const zoom = 2;
    const lensSize = 150;

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    if (x > img.width) x = img.width;
    if (x < 0) x = 0;
    if (y > img.height) y = img.height;
    if (y < 0) y = 0;

    lens.style.left = `${img.offsetLeft + x - lensSize / 2}px`;
    lens.style.top = `${img.offsetTop + y - lensSize / 2}px`;

    lens.style.backgroundPosition = `-${x * zoom - lensSize / 2}px -${y * zoom - lensSize / 2}px`;
    lens.style.backgroundSize = `${img.width * zoom}px ${img.height * zoom}px`;
  };


  const handleAddToCart = async () => {
    if (!authData) {
      navigate('/login');
      return;
    }

    try {

      await addToCart(product._id, 1);

      await getProfile();

      navigate('/cart');
    } catch (error) {
      console.error("Failed to add to cart", error);
    }
  };


  if (productsIsLoading) return <div className="text-center py-5"><Spinner animation="border" /></div>;
  if (!product) return <div className="text-center py-5">Product not found.</div>;

  return (
    <Row className="align-items-center">
      <Col md={6} lg={5} className="position-relative mb-4">
        <div className={classes['img-zoom-wrapper']}>
          <img
            ref={imgRef}
            className="rounded"
            src={product.image}
            alt={product.title}
            onMouseEnter={() => setShowLens(true)}
            onMouseLeave={() => setShowLens(false)}
            onMouseMove={handleMouseMove}
          />
          {showLens && (
            <div
              ref={lensRef}
              className={classes['zoom-lens']}
              style={{ backgroundImage: `url('${product.image}')` }}
            />
          )}
        </div>
      </Col>

      <Col md={6} lg={7} className="ps-md-5">
        <Badge bg="secondary" className="mb-2">{product.category}</Badge>
        <h1 className="display-5 fw-bold">{product.title}</h1>
        <h4 className="text-muted mb-4">{product.brand}</h4>
        <p className="lead mb-4 text-secondary">{product.description}</p>

        <div className="d-flex align-items-center gap-4 mb-4">
          <div className="d-flex align-items-center gap-3">
            {product.onSale ? (
              <>
                <span className="h2 m-0 fw-bold text-danger">{product.discountPrice} €</span>
                <span className="h5 m-0 text-muted text-decoration-line-through">{product.price} €</span>
              </>
            ) : (
              <span className="h2 m-0 fw-bold">{product.price} €</span>
            )}
          </div>
          <Badge bg={product.stock > 0 ? "success" : "danger"}>
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </Badge>
        </div>

        <Button
          variant="dark"
          size="lg"
          className="px-5 w-100 w-md-auto"
          disabled={product.stock === 0 || usersIsLoading}
          onClick={handleAddToCart}
        >
          {usersIsLoading ? "Adding..." : "Add to Cart"}
        </Button>
      </Col>
    </Row>
  );
};

export default ProductDetails;