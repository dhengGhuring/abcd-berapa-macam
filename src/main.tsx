import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { HalamanUtama } from './pages/home/index.tsx'
import { HalamanBermain } from './pages/play/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route index element={<HalamanUtama />} />
        <Route path='main' element={<HalamanBermain />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
