import React, { useState, useRef } from 'react';
import './SplitPdf.css';
import SplitPdfSidebar from './SplitPdfSidebar';

const SplitPdf = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSplitting, setIsSplitting] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log('Selected file:', file.name);
  };

  const handleSplit = async ({ fromPage, toPage }) => {
    if (!selectedFile) {
      alert('Por favor, selecciona un archivo PDF primero.');
      return;
    }

    setIsSplitting(true);

    // Placeholder for PDF splitting logic
    console.log(`Splitting PDF from page ${fromPage} to page ${toPage}`);

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
      <div className="split-pdf-content">
        <div className="split-pdf-main">
          {!selectedFile ? (
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
          ) : (
            <>
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
            <p className="selected-file">Archivo seleccionado: {selectedFile.name}</p>
            </>
          )}
          {isSplitting && (
            <p className="splitting-message">La división puede tardar unos momentos.</p>
          )}
        </div>
        <div className="split-pdf-sidebar-container">
          <SplitPdfSidebar onSplit={handleSplit} />
        </div>
      </div>
    </div>
  );
};

export default SplitPdf;