import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';


// React router 
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Products from './Pages/Products.jsx';
import NotFound from './Pages/NotFound.jsx';
import Navbar from './Layout/Navbar.jsx';
import SignIn from './Pages/SignIn.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';

import UserProfile from './Components/Users/UserProfile.jsx';
import UserOrders from './Components/Users/UserOrders.jsx';

import ProtectedRoute from './Components/Routes/ProtectedRoute.jsx';

import AdminProfile from './Components/Admin/AdminProfile.jsx';
import AdminProduct from './Components/Admin/AdminProduct.jsx';
import AdminCategory from './Components/Admin/AdminCategory.jsx';
import AdminManageUser from './Components/Admin/AdminManageUser.jsx';
import AdminRoute from './Components/Routes/AdminRoute.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />, // Navbar is always rendered
    errorElement: <NotFound />, // Show NotFound page for undefined routes
    children: [
      {
        path: "/", // Home or Products page
        element: <Products />, // Assuming Home is your landing page, replace with Products if intended
      },
      {
        path: "/SignIn",
        element: <SignIn />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signout", // Removing duplicate
        element: <SignIn />,
      },
      {
        path: "/contact", // Removing duplicate
        element: <Contact />,
      },
      {
        path: "/products/:id", // Dynamic route for product details
        element: <ProductDetails />,
      },
      {
        path: "/dashboard/user", // User dashboard protected route
        element: <ProtectedRoute />,
        children: [
          {
            path: 'profile',
            element: <UserProfile />,
          },
          {
            path: 'orders',
            element: <UserOrders />,
          },
        ],
      },
      {
        path: "/dashboard/admin", // Admin dashboard protected route
        element: <AdminRoute />,
        children: [
          {
            path: 'profile',
            element: <AdminProfile />,
          },
          {
            path: 'products',
            element: <AdminProduct />,
          },
          {
            path: 'category',
            element: <AdminCategory />,
          },
          {
            path: 'user',
            element: <AdminManageUser />,
          },
        ],
      },
    ],
  },
 
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);