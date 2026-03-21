import { useState, useEffect } from 'react';
import { Table, InputGroup, Form, Dropdown, Button, Row, Col, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import EditProductModal from './editProductModal/EditProductModal';
import RemoveProductModal from './removeProductModal/RemoveProductModal';
import classes from './SettingsTable.module.css';
import { Edit, Plus, Trash2 } from 'lucide-react';
import useProducts from '../../hooks/useProducts';
import { useAuth } from '../../contexts/AuthContext';

const SettingsTable = () => {
  const navigate = useNavigate();
  const { authData } = useAuth();

  const { getMyProducts, productsData } = useProducts();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchOption, setSearchOption] = useState('title');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showEdit, setShowEdit] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [isEditable, setIsEditable] = useState(true);

  useEffect(() => {
    if (authData?._id) {
      getMyProducts(1, 50);
    }
  }, [authData?._id]);

  const refreshList = () => getMyProducts(1, 50, { userId: authData._id });

  const filteredProducts = productsData?.products?.filter(p =>
    p[searchOption]?.toString().toLowerCase().includes(searchTerm.toLowerCase())
  ) || [];

  return (
    <Container>
      <Row className='mb-4 mt-4 align-items-center'>
        <Col>
          <div className='d-flex align-items-center justify-content-between'>
            <h2 className='m-0'>Manage Your Products</h2>
            <Button className='d-flex align-items-center gap-1' variant="dark" onClick={() => navigate('/addproduct')}>
              <Plus size={18} /> Add Product
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mb-4 mt-4">
        <Col>
          <InputGroup>
            <Dropdown onSelect={(k) => setSearchOption(k)}>
              <Dropdown.Toggle variant="outline-secondary">
                Search by {searchOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey="title">Title</Dropdown.Item>
                <Dropdown.Item eventKey="brand">Brand</Dropdown.Item>
                <Dropdown.Item eventKey="price">Price</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              placeholder={`Type to search...`}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
        </Col>
      </Row>

      <Table hover responsive className="align-middle">
        <thead>
          <tr>
            <th>Img</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th className="text-end">
              <label className={classes['switch']}>
                <input 
                  className={classes['custom-switch']} 
                  type="checkbox" 
                  checked={isEditable}
                  onChange={() => setIsEditable(!isEditable)} 
                />
                <span className={`${classes['slider']} ${classes['round']}`}></span>
              </label>
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product._id}>
              <td>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className={classes['table-img']} 
                />
              </td>
              <td>{product.title}</td>
              <td>{product.brand}</td>
              <td>{product.price} $</td>
              <td className="text-end">
                {isEditable ? (
                  <Button variant="outline-primary btn-sm" onClick={() => { setSelectedProduct(product); setShowEdit(true); }}>
                    <Edit size={16} />
                  </Button>
                ) : (
                  <Button variant="outline-danger btn-sm" onClick={() => { setSelectedProduct(product); setShowRemove(true); }}>
                    <Trash2 size={16} />
                  </Button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <EditProductModal
        show={showEdit}
        handleClose={() => setShowEdit(false)}
        product={selectedProduct}
        refreshList={refreshList}
      />
      <RemoveProductModal
        show={showRemove}
        handleClose={() => setShowRemove(false)}
        product={selectedProduct}
        refreshList={refreshList}
      />
    </Container>
  );
};

export default SettingsTable;