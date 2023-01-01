import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
