import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import MouseCursor from './components/MouseCursor.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <MouseCursor />
  </React.StrictMode>,
)
