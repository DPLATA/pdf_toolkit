import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import drivelineLogo from '/logo-driveline-768x254-1.png';
import immetLogo from '/IMMET_logo.png';

const LandingPage = () => {
  const companyLogos = [
    { name: 'Driveline Baseball', logo: drivelineLogo },
    { name: 'IMMET', logo: immetLogo },
    // Add more company logos as needed
  ];

  return (
    <div className="landing-page">
      <div className="hero">
        <h1 className="hero-title">Transforma tus PDFs sin complicaciones</h1>
        <p className="hero-subtitle">Convierte, divide y manipula tus archivos PDF con facilidad y rapidez</p>
        <Link to="/tools" className="cta-button">Comenzar ahora</Link>
      </div>

      <section className="features">
        <h2>Nuestras herramientas</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>PDF a Excel</h3>
            <p>Convierte tus documentos PDF a hojas de cálculo editables</p>
          </div>
          <div className="feature-card">
            <h3>Dividir PDF</h3>
            <p>Separa tus archivos PDF en documentos más pequeños</p>
          </div>
          {/* Add more feature cards as needed */}
        </div>
      </section>

      <section className="social-proof">
        <h2>Empresas que confían en nosotros</h2>
        <div className="logo-grid">
          {companyLogos.map((company, index) => (
            <img key={index} src={company.logo} alt={company.name} className="company-logo" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;