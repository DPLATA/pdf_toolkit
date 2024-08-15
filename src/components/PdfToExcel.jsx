import React, { useState, useRef } from 'react';
import './PdfToExcel.css';

const PdfToExcel = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isConverting, setIsConverting] = useState(false);
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

    setIsConverting(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('https://api.transformadoc.com/pdf/convert-to-excel', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'pdf_converted_excel.xlsx';
        document.body.appendChild(link);
        link.click();
        link.remove();

        // Clear file selection
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'La conversión falló');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(`Ocurrió un error durante la conversión. Por favor, intenta de nuevo. ${error.message}`);
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <div className="pdf-to-excel-container">
      <header className="header">
        <h1>Convierte PDF a EXCEL</h1>
        <p>Convierte tus archivos PDF a hojas de cálculo de manera rápida y segura</p>
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
              disabled={isConverting}
            >
              {isConverting ? 'Convirtiendo...' : 'Convertir a Excel'}
            </button>
            {isConverting && (
              <p className="conversion-message">La conversión puede tardar hasta un minuto.</p>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default PdfToExcel;