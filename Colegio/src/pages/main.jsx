import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';  // Importe do mesmo diretório
import './index.css';         // CSS na mesma pasta

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);