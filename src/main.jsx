import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import '../src/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>  {/* (entender o pq)foi necessario BrowserRouter para que os components funcionassem,usenavigate e navlink agr funciona */}
      <App />
    </BrowserRouter>
  </StrictMode>
);