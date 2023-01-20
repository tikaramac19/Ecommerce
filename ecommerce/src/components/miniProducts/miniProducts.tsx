import React, { useState } from "react";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import "./_miniProduct.scss";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToFavroute } from "../../store";
import { toast } from "react-hot-toast";
interface miniProductsTypes {
    item: itemInterface,
    id: number
}

const MiniProducts = (props: miniProductsTypes) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const { id, title, price, category, image } = props.item;
    const { token } = useSelector((state: any) => state.authSlice);
    const dispatch = useDispatch();
    // console.log(thumbnail);
    const navigate = useNavigate();
    const goToDetailsPage = () => {
        navigate(`/products/${id}`);
    }

    const addToFavrouteNoti = () => {
        toast.error('you need to login first', {
            duration: 2000,
            position: 'top-right'
        })
    }

    const handleMouseEvent = (e: any, value: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        // console.log('on mouse over')
        setIsShow(value);
    }
    const handleFavroute = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (token) {
            setActive(prev => !prev);
            dispatch(addToFavroute(props.item));
        } else {
            addToFavrouteNoti();
        }
    }

    return (<>

        <div className="product-item-container" onClick={goToDetailsPage} onMouseOver={(e) => { handleMouseEvent(e, true) }} onMouseLeave={(e) => handleMouseEvent(e, false)}>
            <div className="img-cont">
                <img src={image} alt={title} />
            </div>
            <div className="sample">
                <div className="catagory">{category}</div>
                <div className="title">
                    {title}
                </div>
                <div className="price">
                    $ {price}
                </div>
            </div>
            {
                <><div className="abs-btns">
                    {!active ? <div className="heart" onClick={(e) => handleFavroute(e)}><AiOutlineHeart /></div> : <div className="heart" onClick={handleFavroute}><AiFillHeart /></div>}
                    <div className="details" onClick={goToDetailsPage}><BsEye /></div>
                </div></>
            }
        </div>
    </>)
}
export default MiniProducts;