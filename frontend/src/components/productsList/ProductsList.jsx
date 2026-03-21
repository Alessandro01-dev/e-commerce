import { useEffect, useState, useRef, useCallback } from 'react';
import { Alert, Row, Spinner, Container, Col } from 'react-bootstrap';
import ProductCard from './productCard/ProductCard';
import useProducts from '../../hooks/useProducts';
import classes from './ProductsList.module.css'

const ProductsList = ({ filters }) => {
  const { getProducts, productsData, productsIsLoading, productsError, clearProducts } = useProducts();
  const [page, setPage] = useState(1);
  const observer = useRef();

  useEffect(() => {
    clearProducts();
    setPage(1);
  }, [filters]);

  useEffect(() => {
    getProducts(page, 10, filters);
  }, [page, filters]);

  const lastElementRef = useCallback(node => {
    if (productsIsLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && productsData?.currentPage < productsData?.pages) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [productsIsLoading, productsData?.currentPage, productsData?.pages]);

  return (
    <Container as="main" className="my-5">
      {productsError && <Alert variant="danger" className="text-center">{productsError}</Alert>}

      <Row className="g-4">
        {productsData?.products?.map((product) => (
          <Col key={product._id} xs={6} md={4} lg={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>

      {!productsIsLoading && productsData?.currentPage < productsData?.pages && (
        <div ref={lastElementRef} className={classes['infinite-sentinel']} />
      )}

      {productsIsLoading && (
        <div className="text-center py-5 w-100">
          <Spinner animation="border" variant="dark" />
        </div>
      )}

      {!productsIsLoading && productsData?.products?.length === 0 && (
        <Alert variant="warning" className="mx-auto w-50 mt-5 text-center">
          <strong>No products found.</strong>
        </Alert>
      )}
    </Container>
  );
};

export default ProductsList;
