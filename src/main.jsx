import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './reset.scss'
import './index.scss'
import AppRoutes from './routes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)
