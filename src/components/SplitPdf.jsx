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

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch(`https://api.transformadoc.com/pdf/split?start_page=${fromPage}&end_page=${toPage}`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'split_pdf.pdf';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('PDF splitting failed');
      }
    } catch (error) {
      console.error('Error splitting PDF:', error);
      alert('An error occurred while splitting the PDF.');
    } finally {
      setIsSplitting(false);
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
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