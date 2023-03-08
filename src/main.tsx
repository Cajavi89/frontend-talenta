import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ReloadContext } from './context/ReloadContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ReloadContext>
      <App />
    </ReloadContext>
  </React.StrictMode>
)
