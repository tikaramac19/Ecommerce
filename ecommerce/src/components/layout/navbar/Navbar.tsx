import React from "react";
import "./_navbar.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { stat } from "fs";
const Navbar = () => {
  const {cartItems} = useSelector((state:any) => state.products);
  // console.log(cartItems.length)
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <h3>Tikaram Ac</h3>
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/cart"}> Cart ({cartItems.length})</Link>
            </li>
            <li>
              <Link to={"/auth/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/auth/register"}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
