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
    // console.log(checkItem)
    dispatch(addToCart(checkItem));
    // console.log("product added");
  };

  const addToFavrouteLogic = (tempId: number) => {
    const favrouteItem = products.filter((item: itemInterface, id: number) => {
      if (tempId === id) {
        return true;
      }
    });
    // console.log(favrouteItem);
    dispatch(addToFavroute(favrouteItem));
  };

  return (
    <>
      <div className="list-container">
        <div className="item-wrapper">
          {products.map((item: itemInterface, id: number) => {
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
          })}
        </div>
      </div>
    </>
  );
};
export default memo(ProductsList);
