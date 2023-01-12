import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMiniProducts } from "../../store/productSlice/productSlice";
import axios from "axios";
import { Link } from "react-router-dom";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import MiniProducts from "./miniProducts";
import { IoMdArrowForward } from "react-icons/io"
import "./_miniProductsCont.scss";
const MiniProductsContainer = () => {
    const { miniProducts } = useSelector((state: any) => state.productSlice);
    // console.log(miniProducts);
    const dispatch = useDispatch();
    useEffect(() => {

        const fetchingData = async () => {
            const response = await axios.get('https://dummyjson.com/products?limit=4&skip=40');

            const result = await response.data;

            // console.log(result.products);
            dispatch(addMiniProducts(result.products));

        }

        fetchingData();
    }, [])

    return (<>

        <div className="demo-products-container">
            <div className="demo-header">
                <div className="">New Arrived Products</div>
                <div className="viewProduct">
                    <Link to={"/products"}>View all Products <IoMdArrowForward /></Link>
                </div>
            </div>
            <div className="demo-products">
                {
                    miniProducts.map((item: itemInterface, id: number) => {
                        return <MiniProducts key={id.toString()} item={item} id={id} />
                    })
                }
            </div>
        </div>

    </>)
}

export default (MiniProductsContainer);