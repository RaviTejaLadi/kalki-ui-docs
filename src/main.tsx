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
// Load as a static asset so Vite/PostCSS (Tailwind v3) does not reprocess the
// prebuilt Tailwind v4 stylesheet from kalki-ui (avoids @layer build errors).

import 'react-perfect-scrollbar/dist/css/styles.css';
import './styles/index.css';
import './styles/base.css';
import './styles/common.css';
import './styles/key-frames.css';
import "kalki-ui/styles.css";
import { ToastProvider, ToastContainer } from 'kalki-ui-toast';



const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ToastProvider>
      <App />
      <ToastContainer position="top-center" showClose={false} />
    </ToastProvider>
  </React.StrictMode>
);
