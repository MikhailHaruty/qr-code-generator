import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/normalize.css'
import './styles/style.css'
import './styles/media.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
