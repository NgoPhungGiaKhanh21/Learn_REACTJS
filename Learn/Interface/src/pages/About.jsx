import React from "react";
import Header from "../components/home/Header";
import Content from "../components/about/Content";
import Restaurant from "../components/about/Restaurant";
import Description from "../components/about/Description";
import Service from "../components/about/Service";
import Footer from "../components/home/Footer";

const About = () => {
  return (
    <div className="About">
      <Header />
      <Content />
      <Restaurant />
      <Description />
      <Service />
      <Footer />
    </div>
  );
};
export default About;
