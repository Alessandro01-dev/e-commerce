import { useState } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import classes from './RegistrationForm.module.css'
import { useNavigate } from 'react-router-dom';
import useUsers from '../../hooks/useUsers';

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    name: '', surname: '', email: '', password: '', confirmPassword: ''
  });
  const { registerUser, usersIsLoading, usersError } = useUsers();
  const navigate = useNavigate();
  const [localError, setLocalError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocalError('');

    if (userData.password !== userData.confirmPassword) {
      setLocalError("Passwords do not match!");
      return;
    }

    try {
      const { confirmPassword, ...dataToSubmit } = userData;
      await registerUser(dataToSubmit);
      navigate('/login');
    } catch (err) { }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-start">
      {usersError && <Alert variant="danger" className="py-2 small">{usersError}</Alert>}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">First Name</Form.Label>
            <Form.Control
              className={classes['custom-input']}
              name="name"
              placeholder="John"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label className="small fw-bold">Last Name</Form.Label>
            <Form.Control
              className={classes['custom-input']}
              name="surname"
              placeholder="Doe"
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3">
        <Form.Label className="small fw-bold">Email</Form.Label>
        <Form.Control
          className={classes['custom-input']}
          type="email"
          name="email"
          placeholder="email@example.com"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="small fw-bold">Password</Form.Label>
        <Form.Control
          className={classes['custom-input']}
          type="password"
          name="password"
          placeholder="Create password"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label className="small fw-bold">Confirm Password</Form.Label>
        <Form.Control
          className={classes['custom-input']}
          type="password"
          name="confirmPassword"
          placeholder="Repeat password"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="dark" type="submit" className="w-100 py-2" disabled={usersIsLoading}>
        {usersIsLoading ? "Creating account..." : "Create Account"}
      </Button>
    </Form>
  );
};

export default RegistrationForm;
