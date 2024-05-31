import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import RegisterAddress from './pages/RegisterAddress';
import EditAddress from './pages/EditAddress';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/register" element={<RegisterAddress />} />
        <Route path="/edit" element={<EditAddress />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
