import React, { useEffect, useState } from "react";
import "./_details.scss";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import Layout from "../../components/layout/hoc/layout";
import MiniNav from "../../common/miniNav/MiniNav";
import { useSelector } from "react-redux";
import { FcRating } from "react-icons/fc";
import { itemInterface } from "../../@types/globleTypes/itemTypes";
const DetailsPage = () => {
    const ColorValues = [
        {
            id: 1, text: 'Black'
        },
        {
            id: 2, text: 'White'
        },
        {
            id: 3, text: 'Gray'
        }

    ]
    const SizeValuse = [
        {
            id: 1, text: 'S'
        },
        {
            id: 2, text: 'XL'
        },
        {
            id: 3, text: 'XXL'
        }

    ]
    const [activeId, setActiveId] = useState<number | undefined>();
    const [count, setCount] = useState(1)
    const [sizeId, setSizeId] = useState<number | undefined>();
    const [selectedItem, setSelectedItem] = useState<itemInterface | null>(null);
    const { products } = useSelector((state: any) => state.productSlice)
    // console.log(selectedItem);
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        const filteredItem = products.find((item: itemInterface, itemId: number) => {
            return itemId === parseInt(id as string);
        })
        // console.log(filteredItem)
        setSelectedItem(filteredItem);
    }, [])

    const handleActive = (tempId: number) => {
        setActiveId(tempId)
    }
    const handleSizeActive = (tempId: number) => {
        setSizeId(tempId);
    }

    const handleIncrease = () => {

        setCount(count + 1);

    }
    const handleDecrease = () => {
        if (count === 0) {
            setCount(count);
        } else {
            setCount(count - 1);
        }
    }

    return (<>
        <MiniNav />
        <div className="details-container">
            <div className="img-container">
                <img src={selectedItem?.thumbnail} alt={selectedItem?.brand} />
            </div>
            <div className="details">
                <div className="details-header">
                    <h2>{selectedItem?.title}</h2>
                    <p className="category">{(selectedItem?.category)}</p>
                    <div className="rating">
                        <FcRating /> {selectedItem?.rating}
                    </div>
                    <div className="price">
                        <h3>${selectedItem?.price}</h3>
                        <span className="stock">
                            In Stock {selectedItem?.stock}
                        </span>
                    </div>
                    <div className="description">
                        {selectedItem?.description}
                    </div>
                </div>
                <div className="details-footer">
                    <div className="color">
                        <span className="c-title">Color</span>

                        {ColorValues.map((item: any, id: number) => {

                            return <span className={activeId === id ? 'cc-active' : 'cc'} onClick={() => handleActive(id)}>{item.text}</span>

                        })}
                        {/* <span className={!activeColor ? 'cc' : 'cc-active'} onClick={handleActive}>Black</span>
                        <span className="cc">White</span>
                        <span className="cc">Gray</span> */}
                    </div>
                    <div className="size">
                        <span className="c-title">Size</span>
                        {SizeValuse.map((item: any, id: number) => {

                            return <span className={sizeId === id ? 'cc-active' : 'cc'} onClick={() => handleSizeActive(id)}>{item.text}</span>

                        })}
                    </div>
                    <div className="count-item">
                        <div className="select-item">
                            <button onClick={handleDecrease}>-</button>
                            <span>{count}</span>
                            <button onClick={handleIncrease}>+</button>
                        </div>
                        <div className="add-to-cart">
                            <button> <AiOutlineShoppingCart /> Add To Cart</button>
                        </div>
                    </div>
                    <div className="share-section">
                        <div className="favroute">
                            <AiOutlineHeart /> <span>Add to Favroutes</span>
                        </div>
                        <div className="share-options">
                            <span>Share This Product:</span>
                            <span className="icon-cont icon1-bg"><BsFacebook className="icon1" /></span>
                            <span className="icon-cont icon2-bg"><BsTwitter className="icon2" /></span>
                            <span className="icon-cont icon3-bg"><BsLinkedin className="icon3" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Layout(DetailsPage)