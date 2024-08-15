import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import './MenuBar.css';

const MenuBar = () => {
  const { user, signOut } = useAuth();

  return (
    <nav className="menu-bar">
      <div className="menu-bar-content">
        <div className="logo-placeholder">
          <div className="logo-circle"></div>
        </div>
        <div className="menu-items">
          <Link to="/" className="menu-item">Inicio</Link>
          <Link to="/pricing" className="menu-item">Precios</Link>
          <Link to="/about" className="menu-item">Acerca de</Link>
          {user ? (
            <>
              <Link to="/dashboard" className="menu-item">Perfil</Link>
              <button onClick={signOut} className="menu-item menu-button">Salir</button>
            </>
          ) : (
            <Link to="/login" className="menu-item">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;