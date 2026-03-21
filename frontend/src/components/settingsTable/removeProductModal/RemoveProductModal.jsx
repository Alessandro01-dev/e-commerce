import { Modal, Button, Spinner, Alert } from 'react-bootstrap';
import useProducts from '../../../hooks/useProducts';

const RemoveProductModal = ({ show, handleClose, product, refreshList }) => {
  const { deleteProduct, productsIsLoading, productsError, setProductsError } = useProducts();

  const handleRemove = async () => {
    try {
      await deleteProduct(product._id);
      refreshList();
      handleClose();
    } catch (err) {
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Remove Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {productsError && <Alert variant="danger">{productsError}</Alert>}
        <h6>Are you sure you want to remove this product?</h6>
        <p className="fw-bold text-danger">{product?.title}</p>
        <small className="text-muted">This action is permanent and cannot be undone.</small>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose} disabled={productsIsLoading}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleRemove} disabled={productsIsLoading}>
          {productsIsLoading ? <Spinner size="sm" /> : 'Confirm Delete'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveProductModal;