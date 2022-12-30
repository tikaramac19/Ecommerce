import React, { memo } from "react";
import "./_productItem.scss";
import { FcRating } from "react-icons/fc";
import Button from "../../common/Button/Button.common";
import { AiFillEye } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";

interface itemInterface {
  id: number;
  title: string;
  description: string;
  brand: string;
  category: string;
  image: string[];
  price?: number;
  rating: number;
  thumbnail: string;
}

interface productItemProps {
  item: itemInterface;
  id: number;
  addToCartLogic: (tempId: number) => any;
}

const ProductItem = (props: productItemProps) => {
  const { item, id, addToCartLogic } = props;
  // console.log(props);

  return (
    <>
      <div className="item-container">
        <div className="item-img">
          <img src={item.thumbnail} alt={item.title} />
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
