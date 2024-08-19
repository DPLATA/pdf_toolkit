import React from 'react';
import { Link } from 'react-router-dom';
import './ToolCards.css';

const FileSpreadsheetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="8" y1="13" x2="16" y2="13"/>
    <line x1="8" y1="17" x2="16" y2="17"/>
  </svg>
);

const ScissorsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="3"/>
    <circle cx="6" cy="18" r="3"/>
    <line x1="20" y1="4" x2="8.12" y2="15.88"/>
    <line x1="14.47" y1="14.48" x2="20" y2="20"/>
    <line x1="8.12" y1="8.12" x2="12" y2="12"/>
  </svg>
);

const CsvJsonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
    <line x1="10" y1="9" x2="8" y2="9"/>
  </svg>
);

const ToolCards = () => {
  return (
    <div className="tool-cards-container">
      <div className="tools-grid">
        <Link to="/pdf-to-excel" className="tool-card">
          <FileSpreadsheetIcon />
          <h2>PDF a Excel</h2>
          <p>Convierte tus documentos PDF a hojas de cálculo editables.</p>
        </Link>
        
        <Link to="/split-pdf" className="tool-card">
          <ScissorsIcon />
          <h2>Divide PDF</h2>
          <p>Divide tus archivos PDF en documentos más pequeños.</p>
        </Link>

        <div className="tool-card coming-soon">
          <CsvJsonIcon />
          <h2>CSV a JSON</h2>
          <p>Próximamente</p>
        </div>

        <div className="tool-card coming-soon">
          <CsvJsonIcon />
          <h2>JSON a CSV</h2>
          <p>Próximamente</p>
        </div>
      </div>
    </div>
  );
};

export default ToolCards;