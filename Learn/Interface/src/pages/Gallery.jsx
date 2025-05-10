import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import PromoModal from "../components/gallery/ShowModal";
import Event from "../components/gallery/Event";
import Picture from "../components/gallery/Pictures";

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <PromoModal />
      <Event />
      <Picture />
      <Footer />
    </div>
  );
};

export default App;
