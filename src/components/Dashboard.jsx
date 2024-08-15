import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Dashboard.css';
import ToolCards from './ToolCards'


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

const Dashboard = () => {
  const location = useLocation();
  const { user } = location.state || {};

  /*if (!user) {
    return <div>Loading...</div>;
  }*/

  return (
    <div className="dashboard-container">
      {/*<h1>Bienvenido {user.email}! {user.id}</h1>*/}
      <h1>Bienvenido!</h1>
      <p>Selecciona una herramienta para empezar:</p>
      <ToolCards />
    </div>
  );
};

export default Dashboard;