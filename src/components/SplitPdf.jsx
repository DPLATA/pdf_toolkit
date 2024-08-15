import React, { useState, useRef } from 'react';
import './SplitPdf.css';

const SplitPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSplitting, setIsSplitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file.name);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert('Por favor, selecciona un archivo PDF primero.');
      return;
    }

    setIsSplitting(true);

    // Placeholder for PDF splitting logic
    console.log('PDF splitting logic will be implemented here');

    // Simulating an asynchronous operation
    setTimeout(() => {
      setIsSplitting(false);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      alert('PDF splitting completed successfully!');
    }, 2000);
  };

  return (
    <div className="split-pdf-container">
      <header className="header">
        <h1>Divide archivos PDF</h1>
        <p>Divide tus archivos PDF en documentos más pequeños</p>
      </header>
      <main className="main">
        <div className="file-input-container">
          <button className="file-input-button" onClick={() => fileInputRef.current.click()}>
            Seleccionar archivo PDF
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept=".pdf"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
        </div>
        {selectedFile && (
          <>
            <p className="selected-file">Archivo seleccionado: {selectedFile.name}</p>
            <button 
              className="submit-button" 
              onClick={handleSubmit} 
              disabled={isSplitting}
            >
              {isSplitting ? 'Dividiendo...' : 'Dividir PDF'}
            </button>
            {isSplitting && (
              <p className="splitting-message">La división puede tardar unos momentos.</p>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default SplitPdf;