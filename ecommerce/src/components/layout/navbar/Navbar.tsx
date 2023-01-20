import React, { useEffect, useState, useRef } from "react";
import "./_navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { VscThreeBars } from "react-icons/vsc";
import { BsSearch, BsCart } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { logOutUser } from "../../../store/authSlice/authSlice";
import { addProducts } from "../../../store";
import axios from "axios";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState<string | null>('');
  const { firstName, token } = useSelector((state: any) => state.authSlice);
  const { cartItems } = useSelector((state: any) => state.productSlice);
  const firstRender = useRef(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutUser(''));
    navigate('/auth/login');
  }

  const handleChange = (e: any) => {
    e.preventDefault();

    setSearch(e.target.value);

  }

  useEffect(() => {

    // let getSearchProduct = async () => {
    //   const response = await axios.get(`https://fakestoreapi.com/products/${search}`);
    //   const result = response.data;

    //   dispatch(addProducts(result.products));
    // }
    // getSearchProduct();

  }, [search]);
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
            {token == "" ? (
              <>
                <li>
                  <Link to={"/auth/login"}>Login</Link>
                </li>

                <li>
                  <Link to={"/auth/register"}>Register</Link>
                </li>
              </>
            ) : null}
          </ul>
        </div>
        <div className="nav-right">
          <div className="right-wrapper">
            {token && <div className="user-name">{`Hi, ${firstName}`}</div>}
            <div className="search">
              <input type="text" placeholder="Search" onChange={(e) => handleChange(e)} />
              <span>
                <BsSearch className="search-icons" />
              </span>
            </div>

            <div className="icons-container">
              <div className="icons fav-icon">
                <Link to={"/favorites"} title='Favorites'>
                  <AiOutlineHeart className="icon" />
                </Link>
              </div>
              <div className="icons cart-icon">
                <Link to={"/cart"} title="Cart">
                  <BsCart className="icon" />
                  <span className="abs-cart-count">({cartItems.length})</span>
                </Link>
              </div>
              {token ? <div>
                <button onClick={handleLogout} className="logout">LogOut</button>
              </div> : null}
            </div>
          </div>

          <div className={!toggle ? "list-items-hide" : "list-items-show"}>
            <div className="title-cont">
              <h1>Daraz</h1>
              <div className="cancle-btn" onClick={handleToggle}>
                <RxCross1 className="cancle-icons" />
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
                <Link to={"/kids"}> Kids </Link>
              </li>
              <li>
                <Link to={"/sale"}> On Sale </Link>
              </li>
              <li>
                <Link to={"/cart"}> Cart </Link>
              </li>
              <li>
                <Link to={"/favorites"}> Favorites </Link>
              </li>
              {
                token == "" && <><li>
                  <Link to={"/auth/login"}>Login</Link>
                </li>
                  <li>
                    <Link to={"/auth/register"}>Register</Link>
                  </li></>
              }
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
