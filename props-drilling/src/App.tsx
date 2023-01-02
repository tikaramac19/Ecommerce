import React from "react";
import "./App.css";
import Facebook from "./components/Facebook";
import GuestList from "./state/GuestList";
function App() {
  return (
    <div className="App">
      <Facebook />
      <GuestList />
    </div>
  );
}

export default App;
