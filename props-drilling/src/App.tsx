import React from "react";
import "./App.css";
import Facebook from "./components/Facebook";
import GuestList from "./state/GuestList";
import UserDetails from "./state/UserDetails"
function App() {
  return (
    <div className="App">
      {/* <Facebook /> */}
      <UserDetails />
    </div>
  );
}

export default App;
