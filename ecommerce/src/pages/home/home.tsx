import React from "react";
import Layout from "../../components/layout/hoc/layout";
import MiniNav from "../../common/miniNav/MiniNav";
const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <MiniNav />
      </div>
    </>
  );
};

export const Home = Layout(HomePage);
