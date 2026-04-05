import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LoginForm from '../components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-white">
      <Row className="w-100 justify-content-center">

        <Col xs={12} sm={8} md={6} lg={4} className="text-center">
          <h2 className="mb-4 fw-bold">Welcome Back!</h2>

          <LoginForm />
          
          <p className="mt-4 text-muted">
            Don't have an account? <Link to="/register" className="text-black fw-bold">Sign Up</Link>
          </p>
          
          <Link to="/" className="mt-2 d-block small text-secondary text-decoration-none">
            ← Back to Store
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage