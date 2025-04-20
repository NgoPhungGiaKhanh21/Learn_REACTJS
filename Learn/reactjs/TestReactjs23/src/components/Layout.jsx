import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomButton from "./CustomerButton";

const Layout = (props) => {
  console.log(props.children);
  return (
    /*<>
      <Header /> 
      {props.children}
      <CustomButton />
      <Footer />
    </>*/
    <>
      {props.children}
    </>
  );
};

export default Layout;