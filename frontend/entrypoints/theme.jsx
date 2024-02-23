import 'vite/modulepreload-polyfill'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/App'
import "@shopify/polaris/build/esm/styles.css";
import './theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App home={home} />
  </React.StrictMode>
)