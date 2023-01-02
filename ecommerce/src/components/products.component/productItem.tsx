import React, { memo, useState } from "react";
import "./_productItem.scss";
import { FcRating } from "react-icons/fc";
import Button from "../../common/Button/Button.common";
import { AiFillEye } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import toast from "react-hot-toast";

interface productItemProps {
  item: itemInterface;
  id: number;
  addToCartLogic: (tempId: number) => any;
  addToFavrouteLogic: (tempId: number) => any;
}

const ProductItem = (props: productItemProps) => {
  const [favroute, setFavroute] = useState<boolean>(false);

  const { item, id, addToCartLogic, addToFavrouteLogic } = props;
  // console.log(props);

  const favListNotification = () => {
    toast.success("added to favroute list", {
      duration: 2000,
      position: "top-right",
    });
  };

  const handleFavroute = () => {
    if (!favroute) {
      setFavroute(!favroute);
      addToFavrouteLogic(id);
      favListNotification();
    } else {
      setFavroute(false);
    }
  };

  return (
    <>
      <div className="item-container">
        <div className="item-img">
          <img src={item.thumbnail} alt={item.title} />

          <button className="heartBtn" onClick={handleFavroute}>
            {favroute ? (
              <AiFillHeart className="heart-icon" />
            ) : (
              <AiOutlineHeart className="heart-icon" />
            )}
          </button>
        </div>
        <div className="item-price">
          <h3>{item.title}</h3>
          <h4>{item.price} $</h4>
        </div>
        <div className="item-reating">
          <span>
            <FcRating className="ratingIcon" />
          </span>
          <span> {item.rating}</span>
        </div>
        <div className="btn-section">
          <button>
            Details
            <AiFillEye className="" />
          </button>
          {/* <Button title="Add to cart"/> */}
          <button onClick={() => addToCartLogic(id)}>
            Add to cart <BsFillCartFill />
          </button>
        </div>
      </div>
    </>
  );
};
export default memo(ProductItem);
