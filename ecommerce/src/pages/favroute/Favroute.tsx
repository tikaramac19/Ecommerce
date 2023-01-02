import React from "react";
import Layout from "../../components/layout/hoc/layout";
import FavrouteItem from "../../components/favroute.component/favroute.comp";
import { useSelector, useDispatch } from "react-redux";
import "./_favroute.scss";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
const FavroutePage = () => {
  const { favroutes } = useSelector((state: any) => state.products);

  return (
    <>
      <div className="fav-container">
        <h1>FavrouteList</h1>
        <div className="favroutes-list">
          {favroutes.map((item: itemInterface[], id: number) => {
            // // console.log(item)
            return <FavrouteItem item={item} id={id}/>;
          })}
        </div>
      </div>
    </>
  );
};

export const Favroute = Layout(FavroutePage);
