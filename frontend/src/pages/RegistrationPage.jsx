import { Link } from 'react-router-dom';
import RegistrationForm from '../components/registrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <div className="vh-100 d-flex flex-column align-items-center justify-content-center bg-white">
      <h2 className="mb-4">Create Account</h2>
      
      <RegistrationForm />
      
      <p className="mt-3 text-muted">
        Already have an account? <Link to="/login" className="text-black fw-bold">Log In</Link>
      </p>
    </div>
  )
}

export default RegistrationPage