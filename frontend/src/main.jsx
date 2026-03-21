import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </AuthProvider>
  </StrictMode>,
)
