// apps/frontend/src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Fungsi untuk menentukan komponen mana yang akan dirender
async function renderApp() {
  const path = window.location.pathname
  let AppComponent

  if (path === '/classroom') {
    // Import dinamis untuk App3
    const { default: ClassroomApp } = await import('./App3')
    AppComponent = ClassroomApp
  } else {
    // Import dinamis untuk App2 sebagai default
    const { default: DefaultApp } = await import('./App2')
    AppComponent = DefaultApp
  }

  const container = document.getElementById('root')
  if (container) {
    createRoot(container).render(
      <StrictMode>
        <AppComponent />
      </StrictMode>
    )
  }
}

// Jalankan fungsi render
renderApp()