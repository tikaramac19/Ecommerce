import React, { memo, useState } from "react";
import "./_productsList.scss";
import ProductItem from "./productItem";
import { addToCart } from "../../store/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";

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
const ProductsList = () => {
  const { products } = useSelector((state: any) => state.products);
  //   console.log(products);
  const dispatch = useDispatch();
  const addToCartLogic = (tempId: number) => {
    // console.log(products[tempId]);

    const checkItem = products.filter((item: itemInterface, id: number) => {
      if (tempId === id) {
        return item;
      }
    });
    // console.log(checkItem)

    dispatch(addToCart(checkItem));
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
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default memo(ProductsList);
