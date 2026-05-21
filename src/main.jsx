import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Le plugin gère l'enregistrement du SW automatiquement via la config

import { CartProvider } from './context/CartContext'; // Import ici

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
