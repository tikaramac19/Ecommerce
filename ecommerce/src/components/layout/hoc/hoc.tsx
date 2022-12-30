import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

const Hoc = (props: any) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Hoc;
