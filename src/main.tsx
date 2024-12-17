/**
 * Main entry point for the React application.
 * 
 * This module initializes the root React component and renders it to the DOM.
 * It sets up the application with React.StrictMode for additional development checks
 * and includes necessary global styles.
 * 
 * @module main
 * @requires react
 * @requires react-dom/client
 * @requires ./App
 * @requires ./index.css
 * @requires react-perfect-scrollbar/dist/css/styles.css
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
