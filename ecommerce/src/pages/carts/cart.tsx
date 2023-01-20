import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, deleteCart } from "../../store/productSlice/productSlice";
import CartItem from "../../components/cart.component/cartItem";
import "./_cart.scss";
import Layout from "../../components/layout/hoc/layout";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import toast from "react-hot-toast";
import MiniNav from "../../common/miniNav/MiniNav";
import { setTotalPrice } from "../../store/productSlice/productSlice";
const CartPage = () => {
  // const products = useSelector((state: any) => state.productsSlice);
  const { totalPrice } = useSelector((state: any) => state.productSlice);

  const {
    productSlice: { cartItems },
  } = useSelector((state: any) => state);
  // console.log(cartItems);

  const deleteNotification = () => {
    toast.success("removed item from cart list", {
      duration: 2000,
      position: "top-right",
    });
  };

  const dispatch = useDispatch();
  const deleteCartItem = (tempId: number) => {
    const filterDelete = cartItems?.filter((item: any, id: number) => {
      // console.log(item)
      if (tempId !== id) {
        return true;
      }
    });
    dispatch(deleteCart(filterDelete));
    deleteNotification();
  };

  useEffect(() => {
    let initialTotal = cartItems.reduce((total: number, id: number, curr: any, item: any) => {

      return total += item[curr].price

      // console.log(total, curr);
    }, 0)
    dispatch(setTotalPrice(initialTotal));
  }, [cartItems])

  return (
    <>
      <MiniNav />
      <div className="cart-container">
        <div className="leftContainer">
          {/* <div className="list-headers">
            <ul>
              <li>PRODUCT</li>
              <li>PRICE</li>
              <li>QUANTITY</li>
              <li>SUB TOTAL</li>
              <li>REMOVE</li>
            </ul>
            <hr />
          </div> */}
          <table className="list-headers">
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th className="hide-th">SUB TOTAL</th>
              <th>REMOVE</th>
            </tr>
            <hr />
          </table>
          <div>
            <table>
              <div className="carts">
                {cartItems.map((item: itemInterface, id: number) => {
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
            </table>
            <div className="coupen-option">
              <form>
                <input type="text" placeholder="Coupon Code" />
                <button>APPLY COUPON</button>
              </form>
            </div>
          </div>
        </div>
        <div className="checkoutContainer">

          <h3>CART TOTALS</h3>
          <hr />
          <div className="sub-total">
            <h4>SUBTOTAL</h4>
            <p>$ {totalPrice} </p>
          </div>
          <div className="total">
            <h4>TOTAL</h4>
            <p>$ {totalPrice}</p>
          </div>
          <div className="checkout-btn">
            <button>proceed to checkout</button>
          </div>
        </div>

      </div>
    </>
  );
};
export const Cart = Layout(CartPage);
