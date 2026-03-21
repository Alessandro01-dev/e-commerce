import { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Modal, Form, Button, Row, Col, Image, Alert, Spinner } from 'react-bootstrap';
import { Camera } from 'lucide-react';
import useProducts from '../../../hooks/useProducts';
import classes from './EditProductModal.module.css';

const EditProductModal = ({ show, handleClose, product, refreshList }) => {
  const { updateProduct, productsIsLoading, productsError } = useProducts();

  const [formData, setFormData] = useState({
    title: '', brand: '', price: '', category: '', stock: '', description: ''
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title || '',
        brand: product.brand || '',
        price: product.price || '',
        category: product.category || '',
        stock: product.stock || '',
        description: product.description || ''
      });
      setPreview(product.image);
      setImageFile(null);
    }
  }, [product, show]);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (imageFile) data.append('image', imageFile);

    try {
      await updateProduct(product._id, data);
      refreshList();
      handleClose();
    } catch (err) { console.error(err); }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product: {product?.title}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          {productsError && <Alert variant="danger" className="py-2 small">{productsError}</Alert>}

          <div className="d-flex align-items-center gap-4 mb-4 pb-4 border-bottom">
            <div
              {...getRootProps()}
              className={`${classes['dropzone-container']} position-relative rounded-circle p-1 flex-shrink-0 ${isDragActive ? 'border-primary' : ''}`}
            >
              <input {...getInputProps()} />
              <Image
                src={preview}
                roundedCircle
                className={`${classes['preview-image']} w-100 h-100`}
              />
              <div className={`${classes['camera-overlay']} position-absolute w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-25 rounded-circle`}>
                <Camera size={24} />
              </div>
            </div>
            <div>
              <h5 className="m-0">{formData.title || "Product Image"}</h5>
              <p className="text-muted small m-0">
                {imageFile ? <span className="text-primary fw-bold">New image ready!</span> : "Click or drag to change product image"}
              </p>
            </div>
          </div>

          <Row>
            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Title</Form.Label>
                <Form.Control name="title" value={formData.title} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Brand</Form.Label>
                <Form.Control name="brand" value={formData.brand} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Price ($)</Form.Label>
                <Form.Control type="number" name="price" value={formData.price} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Stock</Form.Label>
                <Form.Control type="number" name="stock" value={formData.stock} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="small fw-bold">Category</Form.Label>
                <Form.Control name="category" value={formData.category} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Description</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} required />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer className="border-0">
          <Button variant="outline-secondary" onClick={handleClose} disabled={productsIsLoading}>
            Cancel
          </Button>
          <Button variant="dark" type="submit" className="px-4" disabled={productsIsLoading}>
            {productsIsLoading ? <Spinner size="sm" /> : "Save Changes"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default EditProductModal;