import React, { useState, useEffect } from "react";
import "./_imageSlider.scss"
import { FcPrevious, FcNext } from "react-icons/fc";
import { VscCircleFilled } from 'react-icons/vsc';
interface imagesType {
    url: string,
    title: string
}

interface imageSliderProps {
    imageSlides: imagesType[]
}

const ImageSlider = (props: imageSliderProps) => {
    const [currIndex, setCurrIndex] = useState<number>(0)
    const { imageSlides } = props
    // const imgContiStyles = {
    //     "backgroundImage": `url(${imageSlides[currIndex].url})`,
    //     "height": "400px",
    //     "width": "100%",
    //     "backgroundSize": "contain",
    //     "backgroundPosition": "center",
    //     "positon": "relative",
    // }

    const handlePrevious = () => {

        const isFirstSlide = currIndex === 0;
        const newIndex = isFirstSlide ? imageSlides.length - 1 : currIndex - 1
        setCurrIndex(newIndex)
    }
    const handleNext = () => {
        const isLastSlide = currIndex === imageSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currIndex + 1;
        setCurrIndex(newIndex);
    }
    const hancleClickCircle = (tempId: number) => {
        setCurrIndex(tempId);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            // console.log('This will run every 4 second!');
            const isLastSlide = currIndex === imageSlides.length - 1;
            const newIndex = isLastSlide ? 0 : currIndex + 1;
            setCurrIndex(newIndex);
        }, 5000);
        return () => clearInterval(interval);
    }, [currIndex]);

    return (<>
        <div className="slider-container">
            <div className="images-container">
                <FcPrevious className="previousIcon" onClick={handlePrevious} />
                <FcNext className="nextIcon" onClick={handleNext} />

                <div className="images-container images">
                    {
                        imageSlides.map((item: imagesType, id: number) => {
                            if (currIndex === id) {
                                return <>
                                    <img src={item.url} alt={item.title} key={id.toString()} />
                                </>
                            }
                        })
                    }
                </div>

                <div className="filled-circle-cont">
                    {
                        imageSlides.map((item: any, id: number) => {
                            return <VscCircleFilled key={id.toString()} className={currIndex === id ? 'vsc-circle-active vsc-circle' : 'vsc-circle'} onClick={() => hancleClickCircle(id)} />
                        })
                    }
                </div>

            </div>
        </div>
    </>)
}

export default ImageSlider;