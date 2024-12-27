import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const pot = document.getElementById('root');
createRoot(pot).render(
  <StrictMode>
    <App />
  </StrictMode>
)
// createRoot(pot).render(App())
