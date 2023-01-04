import React, { useState } from "react";
import "./_navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { stat } from "fs";
import { VscThreeBars } from "react-icons/vsc";
import { RxCross1 } from "react-icons/rx";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { cartItems } = useSelector((state: any) => state.products);
  // console.log(cartItems.length)
  const handleToggle = () => {
    setToggle((prev) => !prev);
    console.log(toggle);
  };
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <div className="nav-logo">
            <h3>Tikaram Ac</h3>
          </div>
        </div>
        <div className="nav-right">
          <div className="three-line">
            {!toggle ? (
              <VscThreeBars
                onClick={handleToggle}
                className="three-line-icon"
              />
            ) : (
              <RxCross1 onClick={handleToggle} className="three-line-icon" />
            )}
          </div>

          <ul className={!toggle ? "list-items-hide" : "list-items-show"}>
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
              <Link to={"/favroutes"}> Favroute </Link>
            </li>
            <li>
              <Link to={"/auth/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/auth/register"}>Register</Link>
            </li>
          </ul>
          <ul className="list-items ">
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
              <Link to={"/favroutes"}> Favroute </Link>
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
