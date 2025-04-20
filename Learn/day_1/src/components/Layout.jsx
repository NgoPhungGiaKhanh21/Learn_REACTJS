import React from "react";
import CustomButton from "./CustomButton";
import Footer from "./Footer";
import Header from "./Header";

const Layout = (props) => {
  // console.log(props.children);
  return (
    <>
      {/* <Header /> */}
      {props.children}
      {/* <CustomButton /> */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
