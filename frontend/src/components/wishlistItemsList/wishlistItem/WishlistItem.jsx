import { Row, Col, Button, Image, Card } from 'react-bootstrap';
import { ShoppingCart, Trash2 } from 'lucide-react';
import classes from './WishlistItem.module.css';

const WishlistItem = ({ product, onMoveToCart, onRemove }) => {
  return (
    <Card className={`${classes['item-card']} mb-3 border-0 shadow-sm p-3`}>
      <Row className="align-items-center">
        <Col xs={3} md={2}>
          <div className={classes['img-container']}>
            <Image 
              src={product.image} 
              fluid 
              rounded 
              className="object-fit-contain w-100 h-100" 
            />
          </div>
        </Col>
        <Col xs={6} md={7}>
          <h5 className="mb-1 text-truncate">{product.title}</h5>
          <p className="text-primary fw-bold mb-0">{product.price} $</p>
        </Col>
        <Col xs={3} md={3} className="d-flex gap-2 justify-content-end">
          <Button variant="dark" onClick={() => onMoveToCart(product._id)}>
            <ShoppingCart size={18} />
          </Button>
          <Button variant="outline-danger" onClick={() => onRemove(product._id)}>
            <Trash2 size={18} />
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default WishlistItem;