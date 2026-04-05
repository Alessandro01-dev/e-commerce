import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import classes from './LoginForm.module.css';
import { useAuth } from '../../contexts/AuthContext';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { loginAndGetToken, authError, authIsLoading } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleGuestLogin = async () => {
    const guestCredentials = {
      email: 'mario.rossi@example.com',
      password: 'password123'
    };

    const result = await loginAndGetToken(guestCredentials);
    if (result) {
      navigate('/');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await loginAndGetToken(credentials);
    if (result) {
      navigate('/');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-start">
      {authError && <Alert variant="danger" className="py-2 small">{authError}</Alert>}

      <Form.Group className="mb-3">
        <Form.Label className="small fw-bold">Email address</Form.Label>
        <Form.Control
          className={classes['custom-input']}
          type="email"
          name="email"
          placeholder="name@example.com"
          value={credentials.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="small fw-bold">Password</Form.Label>
        <Form.Control
          className={classes['custom-input']}
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Enter password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="dark" type="submit" className="w-100 py-2" disabled={authIsLoading}>
        {authIsLoading ? "Logging in..." : "Log In"}
      </Button>

      <div className="text-center mt-3">
        <div className="d-flex align-items-center mb-3">
          <hr className="flex-grow-1" />
          <span className="mx-2 small text-muted text-uppercase">Or</span>
          <hr className="flex-grow-1" />
        </div>

        <Button
          variant="outline-dark"
          className="w-100 py-2 fw-bold"
          onClick={handleGuestLogin}
          disabled={authIsLoading}
        >
          Login as Guest
        </Button>
        <p className="text-muted small mt-2">
          Access the full demo with one click
        </p>
      </div>
    </Form>
  );
};

export default LoginForm;