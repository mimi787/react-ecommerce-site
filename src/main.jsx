import { StrictMode} from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // wrap my app in router context for navigation
import "../css/index.css"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(//mount react app into dom
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
)
