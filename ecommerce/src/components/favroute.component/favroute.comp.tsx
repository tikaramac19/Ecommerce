import React, { useState } from "react";
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteFavroute } from "../../store/productSlice/productSlice";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import { toast } from "react-hot-toast";
import "./favroutes.scss";
interface favrouteItemProps {
  item: itemInterface;
  id: number;
}

const FavrouteItem = (props: favrouteItemProps) => {
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);

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

    if (showDialog === true) {
      dispatch(deleteFavroute(id));
      deleteNotification();
    }
    setShowDialog(true);
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
          <img src={item.image} alt={item.title} />

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

            <p>In Stock {item.rating.count}</p>

          </div>
        </div>

        <div className="abs-modal">
          {
            showDialog && <div className="dialog-container-fav">
              <div className="title">Remove from favroutes</div>
              <div className="sub-title">Item(s) will be removed from favroutes</div>
              <div className="btns">
                <button className="btn btn-one" onClick={() => setShowDialog(false)}>Cancel</button>
                <button className="btn btn-two" onClick={handleDeleteFavroute}>Delete</button>
              </div>
            </div>
          }
        </div>

      </div>
    </>
  );
};

export default FavrouteItem;
