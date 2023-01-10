import React, { useEffect, useState } from "react";
import "./_details.scss";
import { useParams } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai'
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs'
import Layout from "../../components/layout/hoc/layout";
import MiniNav from "../../common/miniNav/MiniNav";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../store/productSlice/productSlice";
import { FcRating } from "react-icons/fc";
import { RxAvatar } from 'react-icons/rx';
import { AiFillStar } from 'react-icons/ai'
import { itemInterface } from "../../@types/globleTypes/itemTypes";
import { toast } from "react-hot-toast";
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
    const [count, setCount] = useState(1);
    const [isDesActive, setIsDesActive] = useState(true);
    const [isRevActive, setRevActive] = useState(false);
    const [sizeId, setSizeId] = useState<number | undefined>();
    const [selectedItem, setSelectedItem] = useState<itemInterface | null>(null);
    const { products } = useSelector((state: any) => state.productSlice)
    // console.log(selectedItem);
    const dispatch = useDispatch();
    const { id } = useParams();

    const addToCartNoti = () => {
        toast.success('product added to cart !', {
            duration: 2000,
            position: 'top-right'
        })
    }
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
    const addToCartHandle = () => {
        // console.log(selectedItem)
        dispatch(addToCart(selectedItem))
        addToCartNoti();
    }

    const handleTabs = (values: 'des' | 'rev') => {
        if (values === 'des') {
            setIsDesActive(true)
            setRevActive(false);
        } else {
            setRevActive(true);
            setIsDesActive(false)
        }

    }

    return (<>
        <MiniNav />
        <div className="details-wrapper">
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
                                <button onClick={addToCartHandle}> <AiOutlineShoppingCart /> Add To Cart</button>
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
            <div className="review-container">
                <div className="reviews-header">
                    <span onClick={() => handleTabs('des')}>
                        <div className={isDesActive ? 'border-botm' : ''}>Description</div>
                    </span>
                    <span onClick={() => handleTabs('rev')}>
                        <div className={isRevActive ? 'border-botm' : ''}>Reviews</div>
                    </span>
                </div>
                <div className="contents">
                    {
                        isDesActive && <div className="description-content">
                            <p>{selectedItem?.description}</p>
                        </div>
                    }
                    {
                        isRevActive && <div className="reviews-content">
                            <p className="subtitle"><b>4</b> reviews for <b>{selectedItem?.title}</b></p>

                            <div className="reviews-container">
                                <div className="reviews">
                                    <div className="img">
                                        <RxAvatar />
                                    </div>
                                    <div className="comment">
                                        <div className="star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />

                                        </div>
                                        <h3>Romelu Lukaku</h3>
                                        <p>Nice product</p>
                                    </div>
                                </div>
                                <div className="reviews">
                                    <div className="img">
                                        <RxAvatar />
                                    </div>
                                    <div className="comment">
                                        <div className="star">
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />
                                            <AiFillStar />

                                        </div>
                                        <h3>Hanxoom keto mah</h3>
                                        <p>Sarai ramro chizz</p>
                                    </div>
                                </div>
                                <div className="reviews">
                                    <div className="img">
                                        <RxAvatar />
                                    </div>
                                    <div className="comment">
                                        <div className="star">
                                            <AiFillStar />
                                            <AiFillStar />
                                        </div>
                                        <h3>Hanxoom keto mah</h3>
                                        <p>Yo vanda ramro tw sales berry maa painxa</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>

        </div>
    </>)
}

export default Layout(DetailsPage)