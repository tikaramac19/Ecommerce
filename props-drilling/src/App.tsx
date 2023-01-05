import React from "react";
import "./App.css";
import Facebook from "./components/Facebook";
import GuestList from "./state/GuestList";
import UserDetails from "./state/UserDetails";
import SearchNpmPackage from "./containers/searchNpm";
function App() {
  return (
    <div className="App">
      {/* <Facebook /> */}
      {/* <UserDetails /> */}
      <SearchNpmPackage />
    </div>
  );
}

export default App;
