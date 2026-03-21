import { useState, useCallback, useEffect } from 'react';
import { Form, Button, Row, Col, Alert, Spinner, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Upload, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import useProducts from '../../hooks/useProducts';
import classes from './AddProductForm.module.css';

const AddProductForm = () => {
  const navigate = useNavigate();
  const { createProduct, productsIsLoading, productsError } = useProducts();

  const [formData, setFormData] = useState({
    title: '', brand: '', price: '', category: '', stock: '', description: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false
  });

  useEffect(() => {
    return () => { if (preview) URL.revokeObjectURL(preview); };
  }, [preview]);

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
      await createProduct(data);
      navigate('/settings');
    } catch (err) { console.error(err); }
  };

  return (
    <div className="bg-white p-4 border rounded shadow-sm">
      <h2 className="mb-4 h4">Add a Product</h2>
      {productsError && <Alert variant="danger" className="py-2 small">{productsError}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={8}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Product Title</Form.Label>
              <Form.Control name="title" onChange={handleChange} required />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-bold">Brand</Form.Label>
              <Form.Control name="brand" onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label className="small fw-bold">Product Image</Form.Label>

          {!preview ? (
            <div
              {...getRootProps()}
              className={`${classes.dropzone} ${isDragActive ? classes.active : ''}`}
            >
              <input {...getInputProps()} />
              <Upload size={30} className="text-muted mb-2" />
              {isDragActive ?
                <p className="m-0">Drop the image here...</p> :
                <p className="m-0 text-muted">Drag & drop or click to select image</p>
              }
            </div>
          ) : (
            <div className="d-flex justify-content-center mt-2">
              <div className={classes['preview-wrapper']}>
                <Image src={preview} thumbnail className={classes['preview-img']} />
                <Button
                  variant="danger"
                  className={classes['remove-btn']}
                  onClick={() => { setPreview(null); setImageFile(null); }}
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
          )}
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label className="small fw-bold">Description</Form.Label>
          <Form.Control as="textarea" rows={4} name="description" onChange={handleChange} required />
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="dark" type="submit" disabled={productsIsLoading}>
            {productsIsLoading ? <Spinner size="sm" /> : "Save Product"}
          </Button>
          <Button variant="outline-secondary" onClick={() => navigate(-1)}>Cancel</Button>
        </div>
      </Form>
    </div>
  );
};

export default AddProductForm;