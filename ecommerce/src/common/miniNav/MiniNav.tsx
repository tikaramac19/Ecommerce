import React from 'react'
import "./_mininav.scss"
import { AiOutlineDollarCircle, AiFillCar } from "react-icons/ai"
import { Ri24HoursFill } from "react-icons/ri"
const MiniNav = () => {
    return (<>

        <div className="mini-container">
            <div className="first">
                <AiOutlineDollarCircle className='icon' /> <span>MONEY BACK GUARANTEE</span>
            </div>
            <div className="second">
                <Ri24HoursFill className='icon' /> <span>ONLINE SUPPORT 24/7</span>
            </div>
            <div className="third">
                <AiFillCar className='icon' /> <span>SHIPPING & RETURN SERVICES</span>
            </div>
        </div>

    </>)
}

export default MiniNav;