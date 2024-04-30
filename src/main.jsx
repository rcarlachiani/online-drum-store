import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getFiresotreApp } from './firebase/dbConfig';
import './index.css';

getFiresotreApp;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
