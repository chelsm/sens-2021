import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';
import './index.css';
import App from './App';

ReactGA.initialize('G-P84W41C33L');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
