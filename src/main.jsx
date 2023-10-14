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
import Schedule from './components/Schedule/Schedule';
import About from './components/About/About';
import AuthProvider from './providers/AuthProvider';
import ServiceDetails from './components/Home/ServiceDetails/ServiceDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
        loader:() => fetch('/training.json')
      },
      {
        path:'/Service/:id',
        element:<ServiceDetails></ServiceDetails>,
        loader:()=> fetch('training.json')
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/schedule',
        element: <Schedule></Schedule>
      },
      {
        path:'/about',
        element: <About></About>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
