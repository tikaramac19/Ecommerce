import React from "react";
import "./_navbar.scss"
import { Link } from "react-router-dom";
const Navbar = () =>{
    return(<>
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
                        <Link to={"/auth/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/auth/register"}>Register</Link>
                    </li>
                </ul>
            </div>
        </div>
    </>)
}

export default Navbar