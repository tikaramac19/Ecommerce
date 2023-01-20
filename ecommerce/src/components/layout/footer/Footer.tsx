import React from "react";
import "./_footer.scss";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineNavigateNext } from "react-icons/md"
import MiniFooter from "./miniFooter";
const Footer = () => {
    return (<>
        <div className="footer-container">
            <div className="site-desc">
                <div className="title">
                    DARAZ
                </div>
                <div className="description">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis aliquam dicta quis.
                </div>
                <div className="icons-container">
                    <span className="icons"><BsFacebook /></span>
                    <span className="icons"><BsInstagram /></span>
                </div>
            </div>
            <div className="useful-links">
                <h3>Links</h3>
                <ul className="links-container">
                    <li><Link to={"/"}> <MdOutlineNavigateNext /> Home</Link></li>
                    <li><Link to={"/products"}> <MdOutlineNavigateNext /> Products</Link></li>
                    <li><Link to={"/cart"}> <MdOutlineNavigateNext /> MyCart</Link></li>
                    <li><Link to={"/favorites"}> <MdOutlineNavigateNext /> Favorites</Link></li>
                    <li><Link to={"/kids"}> <MdOutlineNavigateNext /> Kids</Link></li>
                    <li><Link to={"/sales"}> <MdOutlineNavigateNext /> Sales</Link></li>

                </ul>
            </div>
            <div className="payment-methods">
                <div className="info">
                    <div className="info-title">
                        <h3>Payment Methods</h3>
                    </div>
                    <div className="info-det">
                        we accepts various payment methods.
                    </div>
                </div>
                <div className="options">
                    <div className="same-img">
                        <img src="https://dao578ztqooau.cloudfront.net/static/img/logo1.png" alt="khalti" />
                    </div>
                    <div className="same-img">
                        <img src="https://cdn.esewa.com.np/ui/images/esewa_og.png?111" alt="esewa" />
                    </div>
                </div>
            </div>
        </div>
        <MiniFooter />
    </>)
}
export default Footer