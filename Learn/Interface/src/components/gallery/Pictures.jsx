import React from "react";
import img1 from "/images/anh1.jpg";
import img2 from "/images/anh2.jpg";
import img3 from "/images/anh3.jpg";
import img4 from "/images/anh4.webp";
import img5 from "/images/anh5.webp";
import img6 from "/images/anh6.jpg";
import img7 from "/images/anh7.jpg";
import img8 from "/images/anh8.jpg";
import img9 from "/images/anh9.jpg";
import img10 from "/images/anh10.jpg";
import img11 from "/images/anh11.jpg";
import img12 from "/images/anh12.jpg";
import img13 from "/images/anh13.webp";
const Picture = () => {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">HÌNH ẢNH SỰ KIỆN (230)</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1">
          <div className="grid grid-rows-2 gap-6">
            <div className="grid grid-cols-2 gap-6">
              <img
                src={img1}
                alt="img1"
                className="w-full h-48 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
              />
              <img
                src={img2}
                alt="img2"
                className="w-full h-48 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
              />
            </div>
            <div className="row-span-1">
              <img
                src={img3}
                alt="img3"
                className="w-full h-48 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1">
          <img
            src={img4}
            alt="img4"
            className="w-full h-[410px] object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="grid grid-cols-3 gap-6">
          <img
            src={img5}
            alt="img5"
            className="w-full object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
          <img
            src={img6}
            alt="img6"
            className="w-full object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
          <img
            src={img7}
            alt="img7"
            className="w-full h-77 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="grid grid-cols-3 gap-6">
          <img
            src={img8}
            alt="img8"
            className="w-full h-77 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
          <img
            src={img9}
            alt="img9"
            className="w-full object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
          <img
            src={img10}
            alt="img10"
            className="w-full h-77 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 mt-10">
        <div className="grid grid-cols-3 gap-6">
          <img
            src={img11}
            alt="img11"
            className="w-full h-77 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
          <img
            src={img12}
            alt="img12"
            className="w-full object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
          <img
            src={img13}
            alt="img13"
            className="w-full h-77 object-cover blur-[1px] hover:blur-none hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button className="px-6 py-3 bg-orange-500 text-white">
          Xem thêm hình ảnh (230)
        </button>
      </div>
    </div>
  );
};

export default Picture;
