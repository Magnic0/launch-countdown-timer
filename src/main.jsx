import React from 'react'
import ReactDOM from 'react-dom/client'
import './css/style.css';
import { Header } from './app/Header';
import { Timer } from './app/Timer/Timer';
import { Footer } from './app/Footer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container'>
      <Header />
      <main>
        <Timer />
      </main>
    </div>
    <Footer />
  </React.StrictMode>
)
