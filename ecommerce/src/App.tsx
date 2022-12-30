import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import Login from "./pages/auth/Login/Login.pages";
import Navbar from "./components/layout/navbar/Navbar";
import Register from "./pages/auth/Register/Register.pages";
import Products from "./pages/products/Products";
import Hoc from "./components/layout/hoc/hoc";
function App() {
  return (
    <div className="App">
      <Hoc>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Hoc>
    </div>
  );
}

export default App;
