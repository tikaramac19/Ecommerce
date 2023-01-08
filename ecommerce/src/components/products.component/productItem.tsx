import React, { memo, useEffect, useMemo, useState } from "react";
import "./_productItem.scss";
import { FcRating } from "react-icons/fc";
import { BsFillCartFill, BsEye } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

interface productItemProps {
  item: itemInterface;
  id: number;
  addToCartLogic: (tempId: number) => any;
  addToFavrouteLogic: (tempId: number) => any;
}
const ProductItem = (props: productItemProps) => {
  const [favroute, setFavroute] = useState<boolean>(false);
  // console.log(favroute);
  const { favroutes } = useSelector((state: any) => state.productSlice);

  const { item, id, addToCartLogic, addToFavrouteLogic } = props;
  // console.log(props);
  // let { isFavroute } = products;
  // console.log(isFavroute);
  let favrouteItems = useMemo(() => {
    return favroutes;
  }, []);

  // console.log(favrouteItems);

  const favListNotification = () => {
    toast.success("added to favroute list", {
      duration: 2000,
      position: "top-right",
    });
  };

  const handleFavroute = (tempId: number) => {
    console.log("Fav List", favrouteItems);

    if (!favroute) {
      // console.log(!favroute);
      addToFavrouteLogic(id);
      favListNotification();
      setFavroute(true);
    } else {
      setFavroute(false);
    }
  };

  useEffect(() => {
    favrouteItems.map((favItem: itemInterface, id: number) => {
      if (favItem?.id === item?.id) {
        setFavroute(true);
      }
    });
  }, []);

  return (
    <>
      <div className="item-container">
        <div className="item-img">
          <img src={item.thumbnail} alt={item.title} />
          <button className="heartBtn" onClick={() => handleFavroute(item.id)}>
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
          <div>Lorem ipsum dolor sit</div>
        </div>
        <div className="btn-section">
          <Link to={`/products/${id}`}><BsEye /></Link>

          <button onClick={() => addToCartLogic(id)}>
            Add to cart <BsFillCartFill />
          </button>
        </div>
      </div>
    </>
  );
};
export default memo(ProductItem);
