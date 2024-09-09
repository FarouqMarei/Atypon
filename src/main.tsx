import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../public/locales/i18n'; // Import i18n configuration
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
