import React,{memo} from "react";
import { useSelector } from "react-redux";
import "./_productsList.scss";
import { ProductItem } from "../../routes/Router";
interface itemInterface{
    id: number,
    title : string,
    description: string,
    brand: string,
    category: string,
    image : string[],
    price?: number,
    rating:number,
    thumbnail : string
}
const ProductsList = () => {
  const { products } = useSelector((state:any) => state.products);
  //   console.log(products);
  return (
    <>
      <div className="list-container">
        <div className="item-wrapper">
          {products.map((item:itemInterface, id: number) => {
            // console.log(item,"hello")
                return <ProductItem key={id} item={item} />
          })}
        </div>
      </div>
    </>
  );
};
export default memo(ProductsList);
