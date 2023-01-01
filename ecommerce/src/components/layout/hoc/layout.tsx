import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Layout =
  (Component: any) =>
  ({ ...props }) => {
    return (
      <>
        <div>
          <Navbar />
          <Component {...props} />
          <Footer />
        </div>
      </>
    );
  };

export default Layout;
