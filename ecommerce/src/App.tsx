import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./routes/Router";
import { Register } from "./routes/Router";
import { Home } from "./routes/Router";
import { Products } from "./routes/Router";
import { Navbar } from "./routes/Router";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
