import { Link } from 'react-router-dom';
import LoginForm from '../components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-white">
      <h2 className="mb-4">Welcome Back!</h2>
      
      <LoginForm />
      
      <p className="mt-3 text-muted">
        Don't have an account? <Link to="/register" className="text-black fw-bold">Sign Up</Link>
      </p>
      
      <Link to="/" className="mt-4 small text-secondary">← Back to Store</Link>
    </div>
  )
}

export default LoginPage