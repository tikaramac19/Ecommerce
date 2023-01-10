import React from "react";
import Layout from "../../components/layout/hoc/layout";
import FavrouteItem from "../../components/favroute.component/favroute.comp";
import { useSelector, useDispatch } from "react-redux";
import "./_favroutePage.scss";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import MiniNav from "../../common/miniNav/MiniNav";

const FavroutePage = () => {
  // const { favroutes } = useSelector((state: any) => state.productsSlice);
  const {
    productSlice: { favroutes },
  } = useSelector((state: any) => state);

  return (
    <>
      <MiniNav />
      <div className="fav-container">
        {/* <div className="abs-back-link">
          <Link to={"/products"}>
            <BiArrowBack /> Back
          </Link>
        </div> */}
        <h1>FavrouteList</h1>
        <div className="favroutes-list">
          {favroutes.map((item: itemInterface, id: number) => {
            // // console.log(item)
            return <FavrouteItem key={id.toString()} item={item} id={id} />;
          })}
        </div>
      </div>
    </>
  );
};

export const Favroute = Layout(FavroutePage);
