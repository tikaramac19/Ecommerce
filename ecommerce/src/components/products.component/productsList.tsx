import React, { memo, useState } from "react";
import "./_productsList.scss";
import ProductItem from "./productItem";
import {
  addToCart,
  addToFavroute,
} from "../../store/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import toast, { Toaster } from "react-hot-toast";
const ProductsList = () => {
  const { products } = useSelector((state: any) => state.products);
  const [quantity, setQuantity] = useState(1);
  //   console.log(products);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Product added to cart", {
      duration: 1500,
      position: "top-right",
    });
  };

  const addToCartLogic = (tempId: number) => {
    // console.log(products[tempId]);

    const checkItem = products.filter((item: itemInterface, id: number) => {
      if (tempId === id) {
        notify();
        return item;
      }
    });

    if (checkItem && checkItem.length > 0) {
      dispatch(addToCart(checkItem[0]));
    }

    // console.log("product added");
  };

  const addToFavrouteLogic = (tempId: number) => {
    const checkFavroute = products.filter((item: itemInterface, id: number) => {
      if (tempId === id) {
        return true;
      }
    });

    if (checkFavroute && checkFavroute.length > 0) {
      dispatch(addToFavroute(checkFavroute[0]));
    }
    // console.log(favrouteItem);
  };

  return (
    <>
      <div className="list-container">
        <div className="item-wrapper">
          {products && products.length > 0 ? (
            products.map((item: itemInterface, id: number) => {
              // console.log(item,"hello")
              return (
                <ProductItem
                  key={id}
                  id={id}
                  item={item}
                  addToCartLogic={addToCartLogic}
                  addToFavrouteLogic={addToFavrouteLogic}
                />
              );
            })
          ) : (
            <>No Products.</>
          )}
        </div>
      </div>
    </>
  );
};
export default memo(ProductsList);
