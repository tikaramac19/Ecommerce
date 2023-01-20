import React, { memo, useEffect, useMemo, useState } from "react";
import "./_productItem.scss";
import { FcRating } from "react-icons/fc";
import { BsFillCartFill, BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
interface productItemProps {
  item: itemInterface;
  id: number;
  addToCartLogic: (tempId: number, e: any) => any;
  addToFavrouteLogic: (tempId: number) => any;
}
const ProductItem = (props: productItemProps) => {
  const [favroute, setFavroute] = useState<boolean>(false);
  const [showHeart, setShowHeart] = useState<boolean>(false)
  // console.log(favroute);
  const { favroutes } = useSelector((state: any) => state.productSlice);
  const { token } = useSelector((state: any) => state.authSlice);
  const { item, id, addToCartLogic, addToFavrouteLogic } = props;
  // console.log(token)
  const navigate = useNavigate();
  let favrouteItems = useMemo(() => {
    return favroutes;
  }, []);

  const favListNotification = () => {
    toast.success("added to favroute list", {
      duration: 2000,
      position: "top-right",
    });
  };
  const favListNotificationError = () => {
    toast.error('you need to login first !!', {
      duration: 2000,
      position: "top-right"
    })
  }

  const handleMouseOver = (e: any, value: boolean) => {
    e.preventDefault();
    e.stopPropagation();

    setShowHeart(value);

  }

  const handleFavroute = (tempId: number, e: any) => {
    e.stopPropagation();
    // console.log("Fav List", favrouteItems);

    if (token) {
      if (!favroute) {
        // console.log(!favroute);
        addToFavrouteLogic(id);
        favListNotification();
        setFavroute(true);
      } else {
        setFavroute(false);
      }
    } else {
      favListNotificationError();
    }
  };

  useEffect(() => {
    favrouteItems.map((favItem: itemInterface, id: number) => {
      if (favItem?.id === item?.id) {
        setFavroute(true);
      }
    });
  }, []);

  const goToDetailsPage = () => {
    navigate(`/products/${item.id}`)
  }
  return (
    <>
      <div className="item-container" onClick={goToDetailsPage} onMouseOver={(e) => handleMouseOver(e, true)} onMouseLeave={(e) => handleMouseOver(e, false)}>
        <div className="item-img">
          <img src={item.image} alt={item.title} />
          {
            showHeart && <button className="heartBtn" onClick={(e) => handleFavroute(item.id, e)}>
              {favroute ? (
                <AiFillHeart className="heart-icon" />
              ) : (
                <AiOutlineHeart className="heart-icon" />
              )}
            </button>
          }
        </div>
        <div className="item-title">
          <h3 style={{ width: "bold", color: "#8b6238" }}>{item.category}</h3>
          <h3>{item.title}</h3>
          <h4>$ {item.price}</h4>
        </div>
        <div className="item-desc">
          <div>Lorem ipsum dolor sit</div>
        </div>
        <div className="btn-section">
          <button onClick={(e) => addToCartLogic(id, e)}>
            Add to cart <BsFillCartFill />
          </button>
        </div>
      </div>
    </>
  );
};
export default memo(ProductItem);
