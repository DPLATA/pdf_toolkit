// Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../auth'
import './AuthForm.css';
import { useAuth } from '../AuthContext';



const Register = () => {
  /*const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)  // Reset error state
    if (password === confirmPassword) {
      try {
        await signUp(email, password)
        //alert('Registration successful! Please check your email to confirm.')
        navigate('/login')  // Redirect to login page
      } catch (error) {
        setError(error.message)
      }
    } else {
      setError('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.')
    }
  }*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { signUp } = useAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
      if (password === confirmPassword) {
        try {
          const { error } = await signUp({ email, password });
          if (error) throw error;
          navigate('/login');
        } catch (error) {
          setError(error.message);
        }
      } else {
        setError('Passwords do not match. Please try again.');
      }
    };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Regístrate</h2>
        <p className="auth-links">
          Tienes una cuenta? <Link to="/login" className="auth-link">Accede</Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="contraseña"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Repite la contraseña</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="repite la contraseña"
              required
            />
          </div>
          <button type="submit" className="auth-button">Registrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;