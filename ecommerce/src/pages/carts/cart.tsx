import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteCart } from "../../store/productSlice/productSlice";
import CartItem from "../../components/cart.component/cartItem";
import { BiArrowBack } from "react-icons/bi";
import "./_cart.scss";
import { Link } from "react-router-dom";
import Layout from "../../components/layout/hoc/layout";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import toast from "react-hot-toast";

const CartPage = () => {
  const { cartItems } = useSelector((state: any) => state.products);
  // console.log(cartItems);

  const deleteNotification = () => {
    toast.success("removed item from cart list", {
      duration: 2000,
      position: "top-right",
    });
  };

  const dispatch = useDispatch();
  const deleteCartItem = (tempId: number) => {
    const filterDelete = cartItems.filter((item: any, id: number) => {
      if (tempId !== id) {
        return true;
      }
    });
    dispatch(deleteCart(filterDelete));
    deleteNotification();
  };

  return (
    <>
      <div className="cart-container">
        <div className="abs-back-link">
          <Link to={"/products"}>
            <BiArrowBack /> Back
          </Link>
        </div>
        <h1>Your Cart</h1>

        <div className="carts">
          {cartItems.map((item: itemInterface[], id: number) => {
            // console.log(item);
            return (
              <CartItem
                key={id}
                item={item}
                deleteCartItem={deleteCartItem}
                id={id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export const Cart = Layout(CartPage);
