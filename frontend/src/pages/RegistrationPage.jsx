import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import RegistrationForm from '../components/registrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-white">
      <Row className="w-100 justify-content-center">
        <Col xs={12} sm={8} md={6} lg={4} className="text-center">
          <h2 className="mb-4 fw-bold">Create Account</h2>
          
          <RegistrationForm />
          
          <p className="mt-4 text-muted">
            Already have an account? <Link to="/login" className="text-black fw-bold">Log In</Link>
          </p>

          <Link to="/" className="mt-2 d-block small text-secondary text-decoration-none">
            ← Back to Store
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default RegistrationPage