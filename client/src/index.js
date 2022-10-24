import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css'
import App from './App';
import { LaundryContextProvider } from './contexts/laundryContexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LaundryContextProvider>
      <App />
    </LaundryContextProvider>
  </React.StrictMode>
);