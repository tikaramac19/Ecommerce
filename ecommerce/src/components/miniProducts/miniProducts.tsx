import React, { useState } from "react";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import "./_miniProduct.scss";
import { BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
interface miniProductsTypes {
    item: itemInterface,
    id: number
}

const MiniProducts = (props: miniProductsTypes) => {
    const [isShow, setIsShow] = useState<boolean>(false);
    const { id, title, price, category, thumbnail } = props.item;
    const goToDetailsPage = () => {

    }

    const handleMouseEvent = (e: any, value: boolean) => {
        e.preventDefault();
        e.stopPropagation();
        // console.log('on mouse over')
        setIsShow(value);

    }
    return (<>

        <div className="product-item-container" onClick={goToDetailsPage} onMouseOver={(e) => { handleMouseEvent(e, true) }} onMouseLeave={(e) => handleMouseEvent(e, false)}>
            <div className="img-cont">
                <img src={thumbnail} alt={title} />
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
                isShow ? <><div className="abs-btns">
                    <div className="heart"><AiOutlineHeart /></div>
                    <div className="details"><BsEye /></div>
                </div></> : null
            }
        </div>
    </>)
}
export default MiniProducts;