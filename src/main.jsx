import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './app/Header';
import { Timer } from './app/Timer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Timer />
  </React.StrictMode>
)
