import React, { useState } from 'react';

const SplitPdfSidebar = ({ onSplit }) => {
  const [fromPage, setFromPage] = useState(1);
  const [toPage, setToPage] = useState(1);

  const handleSplit = () => {
    onSplit({ fromPage, toPage });
  };

  return (
    <div className="split-pdf-sidebar">
      <h2 className="sidebar-title">Dividir</h2>
      <div className="range-inputs">
        <p className="range-label">Rango de páginas</p>
        <div className="input-group">
          <div className="input-row">
            <label htmlFor="fromPage">de la página: </label>
            <input
              type="number"
              id="fromPage"
              className="page-input"
              value={fromPage}
              onChange={(e) => setFromPage(Number(e.target.value))}
              min={1}
            />
          </div>
          <div className="input-row">
            <label htmlFor="toPage">a la página: </label>
            <input
              type="number"
              id="toPage"
              className="page-input"
              value={toPage}
              onChange={(e) => setToPage(Number(e.target.value))}
              min={1}
            />
          </div>
        </div>
      </div>
      <button
        className="split-btn"
        onClick={handleSplit}
      >
        Split PDF
      </button>
    </div>
  );
};

export default SplitPdfSidebar;