import React, { useCallback, useEffect, useState } from "react";
import { addProducts } from "../../store/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import "./_products.scss";
import ProductsList from "../../components/products.component/productsList";
import Layout from "../../components/layout/hoc/layout";
import MiniNav from "../../common/miniNav/MiniNav";
import { AiFillFastBackward, AiFillFastForward } from 'react-icons/ai'
const ProductsPage = () => {
  // const { pageTitle } = useSelector((state: any) => state.productsSlice);
  // const product = useSelector((state: any) => state.productSlice);

  let limit = 9;
  const [page, setPage] = useState<number>(0);
  const [total, setTotal] = useState<number>(1);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    const response = await axios.get(`https://fakestoreapi.com/products?limit=${limit}&page=${page}`);
    const result = await response.data;

    setTotal(20);
    dispatch(addProducts(result));
  }, [page]);

  // console.log(products);
  useEffect(() => {
    // console.log(userToken);
    fetchData();
  }, [page]);

  return (
    <>
      <MiniNav />
      <div className="products-container">
        <div className="page-title">
          {/* <h2>{pageTitle}</h2> */}
        </div>
        <div className="products-list">
          <ProductsList />
        </div>
        <div className="pagination-container">
          <div className="backward-icon" onClick={() => setPage((prev) => prev === 0 ? prev : prev - 1)}>
            <AiFillFastBackward />
          </div>
          <div className="num-pages">
            {Array(Math.ceil(total / limit)).fill('').map((_, index) => {
              // console.log(total, limit, index)
              return <span key={index} onClick={() => setPage(index)} ><button className={page === index ? 'span-active' : ''}>{index + 1}</button></span>
            })}

          </div>
          <div className="forward-icon" onClick={() => setPage((prev) => prev === Math.ceil(total / limit) ? prev : prev + 1)}>
            <AiFillFastForward />
          </div>
        </div>
      </div>
    </>
  );
};
export const Products = Layout(ProductsPage);
