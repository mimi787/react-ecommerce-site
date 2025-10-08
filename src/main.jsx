import React from 'react'//bring in react core libraries
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // wrap my app in router context for navigation
import App from './App'//app.jsx

import'./index.css'
ReactDOM.createRoot(document.getElementById('root')).render(//mount react app into dom
    <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
  </React.StrictMode>
)
