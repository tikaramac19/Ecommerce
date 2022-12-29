import { lazy } from "react";
// import pages using lazy

const Login = lazy(() => import("../pages/auth/Login/Login.pages"));
const Register = lazy(() => import("../pages/auth/Register/Register.pages"));
const Home = lazy(() => import("../pages/home/home"));
const Products = lazy(() => import("../pages/products/Products"));
const ProductsList = lazy(
  () => import("../components/products.component/productsList")
);
const ProductItem = lazy(
  () => import("../components/products.component/productItem")
);
const Navbar = lazy(() => import("../components/layout/navbar/Navbar"));
export { Login, Register, Home, Products, ProductsList, ProductItem, Navbar };
