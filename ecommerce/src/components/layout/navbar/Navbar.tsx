import React, { useState } from "react";
import "./_navbar.scss";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { stat } from "fs";
import { VscThreeBars } from "react-icons/vsc";
import { BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { cartItems } = useSelector((state: any) => state.products);
  // console.log(cartItems.length)
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <div className="three-line">
            <VscThreeBars onClick={handleToggle} className="three-line-icon" />
          </div>

          <div className="nav-logo">
            <Link to={"/"}>Daraz</Link>
          </div>
          <ul className="list-items ">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/products"}>Products</Link>
            </li>
            <li>
              <Link to={"/kids"}> Kids </Link>
            </li>
            <li>
              <Link to={"/sale"}>On Sale</Link>
            </li>
            <li>
              <Link to={"/auth/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/auth/register"}>Register</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="right-wrapper">
            <div className="search">
              <input type="text" placeholder="Search" />
              <span>
                <BsSearch className="search-icons" />
              </span>
            </div>
            <div className="icons-container">
              <div className="icons fav-icon">
                <Link to={"/favroutes"}>
                  <AiOutlineHeart className="icon" />
                </Link>
              </div>
              <div className="icons cart-icon">
                <Link to={"/cart"} title="cart">
                  <BsCart className="icon" />
                  {/* <span className="abs-cart-count">{cartItems.length}</span> */}
                </Link>
              </div>
              <div className="icons cart-icon">
                <Link to={"/profile"}>
                  <CgProfile className="icon" />
                </Link>
              </div>
            </div>
          </div>

          <div className={!toggle ? "list-items-hide" : "list-items-show"}>
            <div className="title-cont">
              <h1>Daraz</h1>
              <div className="cancle-btn">
                <RxCross1 onClick={handleToggle} className="cancle-icons" />
              </div>
            </div>

            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/products"}>Products</Link>
              </li>
              <li>
                <Link to={"/cart"}> Kids </Link>
              </li>
              <li>
                <Link to={"/sale"}> On Sale </Link>
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
      </div>
    </>
  );
};

export default Navbar;
