import React from "react";
import { Carousel } from "antd";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel autoplay dots={true} className="w-full">
        <div className="relative w-full">
          <img
            src="/images/anh1.jpg"
            alt="anh1"
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              ƯU ĐÃI LÊN TỚI 30%
            </h1>
            <p className="text-2xl md:text-3xl mb-2">
              KHI ĐẶT SET MENU SUM VẦY
            </p>
            <p className="text-lg md:text-xl mb-4">
              Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021
            </p>
            <Link
              to="/about"
              style={{
                backgroundColor: "orangered",
                color: "white",
                padding: "12px 10px",
              }}
            >
              XEM CHI TIẾT ƯU ĐÃI
            </Link>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="/images/anh2.jpg"
            alt="anh2"
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              ƯU ĐÃI LÊN TỚI 30%
            </h1>
            <p className="text-2xl md:text-3xl mb-2">
              KHI ĐẶT SET MENU SUM VẦY
            </p>
            <p className="text-lg md:text-xl mb-4">
              Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021
            </p>
            <Link
              to="/about"
              style={{
                backgroundColor: "orangered",
                color: "white",
                padding: "12px 10px",
              }}
            >
              XEM CHI TIẾT ƯU ĐÃI
            </Link>
          </div>
        </div>
        <div className="relative w-full">
          <img
            src="/images/anh3.jpg"
            alt="anh3"
            className="w-full h-auto object-cover max-h-[500px]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              ƯU ĐÃI LÊN TỚI 30%
            </h1>
            <p className="text-2xl md:text-3xl mb-2">
              KHI ĐẶT SET MENU SUM VẦY
            </p>
            <p className="text-lg md:text-xl mb-4">
              Áp dụng cho tiệc tại Hà Nội, từ 15/11 - 20/11/2021
            </p>
            <Link
              to="/about"
              style={{
                backgroundColor: "orangered",
                color: "white",
                padding: "12px 10px",
              }}
            >
              XEM CHI TIẾT ƯU ĐÃI
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
