import React from "react";
import Layout from "../../components/layout/hoc/layout";
import MiniNav from "../../common/miniNav/MiniNav";
import ImageSlider from "../../components/imageSlider/imageSlider.component";
import MiniProductsContainer from "../../components/miniProducts/miniProducts.component";
const HomePage = () => {

  const imageSlides = [
    { url: 'https://images.pexels.com/photos/4841273/pexels-photo-4841273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'beutiful girl' },
    { url: 'https://images.pexels.com/photos/5650050/pexels-photo-5650050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'beutiful girl' },
    { url: 'https://images.pexels.com/photos/7195060/pexels-photo-7195060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'beutiful girl' },
    { url: 'https://images.pexels.com/photos/7817699/pexels-photo-7817699.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'beutiful girl' },
    
  ]

  return (
    <>
      <div className="home-container">
        <MiniNav />
        <ImageSlider imageSlides={imageSlides} />
        <MiniProductsContainer />
      </div>
    </>
  );
};

export const Home = Layout(HomePage);
