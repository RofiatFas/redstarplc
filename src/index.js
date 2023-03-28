import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import RouterComponent from './utils/RouterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <RouterComponent />
  </React.StrictMode>
);