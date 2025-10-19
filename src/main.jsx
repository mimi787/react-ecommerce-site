import "./css/index.css"
import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // wrap my app in router context for navigation
import App from './App.jsx'
import {CartProvider} from "./contexts/ProductContext.jsx"

createRoot(document.getElementById('root')).render(//mount react app into dom
  <StrictMode>
    <BrowserRouter>
    <CartProvider>
      <App/>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>
);
