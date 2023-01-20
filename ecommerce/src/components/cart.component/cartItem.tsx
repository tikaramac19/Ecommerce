import React, { useState } from "react";
import { CiSquareRemove } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux";
import "./_cartItem.scss";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import { setIncreaseTotal, setDecreaseTotal } from "../../store/productSlice/productSlice";


interface cartItemProps {
  item: itemInterface;
  id: number;
  deleteCartItem: (tempId: number) => any;
}

const CartItem = (props: cartItemProps) => {
  const { item, deleteCartItem, id } = props;
  // console.log(token)
  const [count, setCount] = useState<number>(1);
  const [subPrice, setSubPrice] = useState<number | undefined>(() => item.price);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlePriceChange = (change: 'inc' | 'dec', value: number) => {
    if (change === 'dec') {
      if (value <= 1) {
        setCount(value);
        setShowDialog(true);
        return
      } else {
        setCount(value - 1);
      }
      dispatch(setDecreaseTotal(item.price));
      setSubPrice(item.price * (value - 1));

    } else {
      setCount(value + 1);
      dispatch(setIncreaseTotal(item.price));
      setSubPrice(item.price * (value + 1));
    }
  }

  const handleDeleteBtn = () => {
    deleteCartItem(id);
    setShowDialog(false);
  }

  return (
    <>
      <div className="cartItem-container">
        <table className="product-list">
          <tr>
            <td>
              <div className="product-image">
                <img src={item.image} alt={item.brand} />
                <div className="brand-name">{item.title}</div>
              </div>
            </td>
            <td>
              <div className="price"> ${item.price}</div>
            </td>
            <td>
              <div className="Quantity">
                <div className="select-item">
                  <button onClick={() => handlePriceChange('dec', count)}>-</button>
                  <span>{count}</span>
                  <button onClick={() => handlePriceChange('inc', count)}>+</button>
                </div>
              </div>
            </td>
            <td className="hide-td">
              <div className="subtotal">
                <p> ${subPrice}</p>
              </div>
            </td>
            <td>
              <div className="remove">
                <button onClick={() => deleteCartItem(id)}><CiSquareRemove className="deleteIcon" /></button>
              </div>
            </td>
          </tr>

        </table>
        <div>

        </div>

        {
          showDialog && <div className="dialog-container">
            <div className="title">Remove from cart</div>
            <div className="sub-title">Item(s) will be removed from order</div>
            <div className="btns">
              <button className="btn btn-one" onClick={() => setShowDialog(false)}>Cancel</button>
              <button className="btn btn-two" onClick={() => handleDeleteBtn()}>Delete</button>
            </div>
          </div>
        }
      </div>
    </>
  );
};
export default CartItem;
