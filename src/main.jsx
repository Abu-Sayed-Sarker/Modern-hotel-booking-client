import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Router/Route.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Route}>
        </RouterProvider>
        <Toaster position='top-center'></Toaster>
      </QueryClientProvider>
    </AuthProvider>


  </StrictMode>,
)
