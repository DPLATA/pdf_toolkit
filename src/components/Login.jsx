import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css';
import { login } from '../auth';
import { useAuth } from '../AuthContext';

const Login = () => {
  //const [email, setEmail] = useState('')
  /*const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const navigate = useNavigate() // Use navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)  // Reset error state
    try {
      const { data, error } = await login(email, password)
      if (data) {
	      console.log(data.user)
        //console.log('Login successful!')
        navigate('/dashboard', { state: data })  // Redirect to user account page with user data
      } else {
        conole.log(error)
        setError('Login failed. Please try again.')
      }
    } catch (error) {
      setError(error.message)
    }
  }*/

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { signIn } = useAuth();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setError(null);
      try {
        const { error } = await signIn({ email, password });
        if (error) throw error;
        navigate('/dashboard');
      } catch (error) {
        setError(error.message);
      }
    };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Log in</h2>
        <p className="auth-links">
          No tienes una cuenta? <Link to="/register" className="auth-link">Regístrate</Link>
        </p>
        {/*<p className="auth-links">
          Forgot your password? <Link to="/reset-password" className="auth-link">Reset it here</Link>
        </p>*/}
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
          <button type="submit" className="auth-button">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;