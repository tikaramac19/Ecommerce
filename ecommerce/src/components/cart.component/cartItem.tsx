import React from "react";
import { FcRating } from "react-icons/fc";
import Button from "../../common/Button/Button.common";
import { AiFillDelete } from "react-icons/ai";
import "./_cartItem.scss";
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

interface cartItemProps {
  item: itemInterface[];
  id: number;
  deleteCartItem: (tempId: number) => any;
}

const CartItem = (props: cartItemProps) => {
  const { item, deleteCartItem, id } = props;

  // console.log(item);

  return (
    <>
      <div className="cartItem-container">
        <div className="cart-img">
          <img src={item[0].thumbnail} alt={item[0].title} />

          <button className="btn-del" onClick={() => deleteCartItem(id)}>
            <AiFillDelete className="delete-icon" />
          </button>
        </div>
        <div className="cart-price">
          <h3>{item[0].title}</h3>
          <h4>{item[0].price} $</h4>
        </div>
        <div className="cart-reating">
          <span>
            <FcRating className="ratingIcon" />
          </span>
          <span> {item[0].rating}</span>
        </div>
        <div className="btn-section">
          <Button title="Checkout" />
        </div>
      </div>
    </>
  );
};
export default CartItem;
