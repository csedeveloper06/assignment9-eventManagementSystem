import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import Home from './components/Home/Home.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path:'/',
        element: <Login></Login>
      },
      {
        path:'/',
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
