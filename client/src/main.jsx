import './index.css'
import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import EditForm from './pages/EditForm.jsx'
import ViewForm from './pages/ViewForm.jsx'
import CreateForm from './pages/CreateForm.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/form/create',
    element: <CreateForm />,
  },
  {
    path: '/form/:id/edit',
    element: <EditForm />,
  },
  {
    path: '/form/:id',
    element: <ViewForm />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
