import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../pages/auth/Login/Login.pages";
import { Register } from "../pages/auth/Register/Register.pages";
import { Products } from "../pages/products/Products";
import { Cart } from "../pages/carts/cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "*",
    element: <div>Page Not Found</div>,
  },
]);
