import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Product from './pages/Product.tsx'
import Checkout from './pages/Checkout.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import Error from './pages/ErrorPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/product/:id",
    element: <Product />,
    errorElement: <Error />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
    errorElement: <Error />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
