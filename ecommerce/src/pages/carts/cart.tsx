import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteCart } from "../../store/productSlice/productSlice";
import CartItem from "../../components/cart.component/cartItem";
import { BiArrowBack } from "react-icons/bi";
import "./_cart.scss";
import { Link } from "react-router-dom";
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

const Cart = () => {
  const { cartItems } = useSelector((state: any) => state.products);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const deleteCartItem = (tempId: number) => {
    // console.log(tempId, cartItems[tempId]);

    const filterDelete = cartItems.filter((item: any, id: number) => {
      // console.log(item)

      if (tempId !== id) {
        return true;
      }
    });

    // console.log(filterDelete);
    dispatch(deleteCart(filterDelete));
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
export default Cart;
