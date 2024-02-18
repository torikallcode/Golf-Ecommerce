import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LoginPage } from './Pages/LoginPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>hello world</h1>
  },
  {
    path: "/Login",
    element: <LoginPage></LoginPage>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
