import React, { useEffect, useState } from "react";
import { FcRating } from "react-icons/fc";
import Button from "../../common/Button/Button.common";
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { FiMinus } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./_cartItem.scss";
import { itemInterface } from "../../@types/globleTypes/itemTypes";

interface cartItemProps {
  item: itemInterface;
  id: number;
  deleteCartItem: (tempId: number) => any;
}

const CartItem = (props: cartItemProps) => {
  const { totalPrice } = useSelector((state: any) => state.products);
  const [count, setCount] = useState<number>(1);
  const [pricetotal, setTotalPrice] = useState(totalPrice);

  const { item, deleteCartItem, id } = props;
  // console.log(item);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaceCount = () => {
    if (count === 0) {
      setCount(count);
    } else {
      setCount(count - 1);
    }
  };

  // console.log("item in cart: ", item);

  useEffect(() => {
    setTotalPrice(item.price);
  }, []);

  return (
    <>
      <div className="cartItem-container">
        <div className="cart-img">
          <img src={item.thumbnail} alt={item.title} />

          <button className="btn-del" onClick={() => deleteCartItem(id)}>
            <AiFillDelete className="delete-icon" />
          </button>
        </div>
        <div className="cart-price">
          <h3>{item.title}</h3>
          <h4>{item.price} $</h4>
        </div>
        <div className="cart-rating">
          <span>
            <FcRating className="ratingIcon" />
          </span>
          <span> {item.description}</span>
        </div>
        <div className="order">
          <button onClick={increaseCount}>
            <BsPlus />
          </button>
          <span>{count}</span>
          <button onClick={decreaceCount}>
            <FiMinus />
          </button>
        </div>
        <div className="total-price">
          <span> Total Price : {pricetotal * count} $</span>
        </div>
        <div className="btn-section">
          <Button title="Checkout" />
        </div>
      </div>
    </>
  );
};
export default CartItem;
