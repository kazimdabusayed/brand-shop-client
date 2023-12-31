import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './providers/AuthProvider'
import router from "./routes/routes";
import './index.css'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
