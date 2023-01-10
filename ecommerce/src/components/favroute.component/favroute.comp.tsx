import React, { useEffect, useState } from "react";
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteFavroute } from "../../store/productSlice/productSlice";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import { toast } from "react-hot-toast";
import "./favroutes.scss"
interface favrouteItemProps {
  item: itemInterface;
  id: number;
}

const FavrouteItem = (props: favrouteItemProps) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const { item, id } = props;
  const dispatch = useDispatch();

  const deleteNotification = () => {
    toast.success("removed from favroute list !!", {
      duration: 1500,
      position: "top-right",
      className: "toast-notification",
      style: {},
    });
  };

  const handleDeleteFavroute = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(deleteFavroute(id));
    deleteNotification();
  };

  const handleMouseEvent = (e: any, value: boolean) => {
    e.preventDefault();
    e.stopPropagation();
    // console.log("event");
    setShowDeleteBtn(value);
  };

  return (
    <>
      <div
        className="favItem-container"
        onMouseOver={(e) => handleMouseEvent(e, true)}
        onMouseLeave={(e) => handleMouseEvent(e, false)}
      >
        <div className="cart-img">
          <img src={item.thumbnail} alt={item.title} />

          {showDeleteBtn && (
            <button className="btn-del" onClick={handleDeleteFavroute}>
              <AiFillDelete className="delete-icon" />
            </button>
          )}
        </div>
        <div className="cart-price">
          <h3>{item.title}</h3>
          <h4>$ {item.price}</h4>

          <div className="stock">

            <p>In Stock {item.stock}</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default FavrouteItem;
