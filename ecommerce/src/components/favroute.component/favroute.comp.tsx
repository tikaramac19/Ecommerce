import React from "react";
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { deleteFavroute } from "../../store/productSlice/productSlice";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import { toast } from "react-hot-toast";
interface favrouteItemProps {
  item: itemInterface[];
  id: number;
}

const FavrouteItem = (props: favrouteItemProps) => {
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

  const handleDeleteFavroute = () => {
    dispatch(deleteFavroute(id));
    deleteNotification();
  };

  return (
    <>
      <div className="cartItem-container">
        <div className="cart-img">
          <img src={item[0].thumbnail} alt={item[0].title} />

          <button className="btn-del" onClick={handleDeleteFavroute}>
            <AiFillDelete className="delete-icon" />
          </button>
        </div>
        <div className="cart-price">
          <h3>{item[0].title}</h3>
          <h4>{item[0].price} $</h4>
        </div>
        <div className="cart-rating">
          <span>
            <FcRating className="ratingIcon" />
          </span>
          <span> {item[0].description}</span>
        </div>
      </div>
    </>
  );
};

export default FavrouteItem;
