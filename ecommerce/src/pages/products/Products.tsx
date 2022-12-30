import React, { useEffect } from "react";
import { addProducts } from "../../store/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./_products.scss";
import ProductsList from "../../components/products.component/productsList";
const Products = () => {
  const { pageTitle } = useSelector((state: any) => state.products);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const result = await response.data;
    dispatch(addProducts(result.products));
  };
  // console.log(products);
  useEffect(() => {
    // console.log("kera")
    fetchData();
  }, []);

  return (
    <>
      <div className="products-container">
        <div className="page-title">
          <h2>{pageTitle}</h2>
        </div>
        <div className="products-list">
          <ProductsList />
        </div>
      </div>
    </>
  );
};
export default Products;
