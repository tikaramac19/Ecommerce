import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Login } from "../pages/auth/Login/Login.pages";
import { Register } from "../pages/auth/Register/Register.pages";
import { Products } from "../pages/products/Products";
import { Cart } from "../pages/carts/cart";
import { Favroute } from "../pages/favroute/Favroute";
import DetailsPage from "../pages/details.page/details.page"
import ProtectedRoutes from "../components/layout/protected_route/Protected";
import { ErrorPage } from "../common/errorPage/error.common";
import PublicRoutes from "../components/layout/protected_route/publicRoutes";
export const router = createBrowserRouter([
  {
    element: (
      <PublicRoutes />
    ),
    children: [
      {
        path: '/auth/login',
        element: <Login />
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: '/products/:id',
        element: <DetailsPage />
      }
      ,
      {
        path: "/error",
        element: <ErrorPage />,
      }, {
        path: '/kids',
        element: <ErrorPage />
      }, {
        path: '/sale',
        element: <ErrorPage />
      }
      ,
      {
        path: "/",
        element: <Home />,
      }
    ]
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/cart",
        element: (
          <Cart />
        ),
      },
      {
        path: "/favorites",
        element: (
          <Favroute />
        ),
      },

    ]
  }
]);
