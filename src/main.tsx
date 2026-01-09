import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Pastikan file ini ada dan mengimpor Tailwind
import App from './App.tsx'

// Menggunakan non-null assertion (!) karena kita yakin elemen 'root' ada di index.html
const rootElement = document.getElementById('root');

if (!rootElement) throw new Error('Gagal menemukan elemen root. Pastikan index.html memiliki <div id="root"></div>');

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)