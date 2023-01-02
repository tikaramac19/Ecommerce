import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
