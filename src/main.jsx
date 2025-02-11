import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify'
import HandleRoutes from './HandleRoutes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HandleRoutes />
    <ToastContainer />
  </StrictMode>,
)
