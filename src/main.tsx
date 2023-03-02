import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { AuthProvider } from './contexts/AuthContext'
import { AppCtxProvider } from './contexts/AppContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppCtxProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppCtxProvider>
  </React.StrictMode>,
)
