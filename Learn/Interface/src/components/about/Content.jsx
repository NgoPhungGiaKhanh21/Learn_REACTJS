import React from "react";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const Content = () => {
  const videoId = "ht6yPQd8Al4";

  // Cấu hình kích thước và tùy chọn video
  const sizeVideo = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Bên trái: Tiêu đề và nút */}
        <div className="flex flex-col justify-start">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            SỰ LỰA CHỌN ÂM THẦM SỐ 1
          </h1>
          <Link
            to="/gallery"
            style={{
              backgroundColor: "#f28c38",
              borderColor: "#f28c38",
              width: "200px",
            }}
            className="uppercase font-semibold text-white px-4 py-2"
          >
            Xem hình ảnh tiếp
          </Link>
        </div>
        <div>
          <div className="mb-4">
            <YouTube videoId={videoId} opts={sizeVideo} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta ante dui, nec condimentum diam auctor nec. Integer auctor
              turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem
              vitae tempor. Donec dictum lectus et bibendum faucibus. Integer
              mollis arcu sit amet mollis blandit.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta ante dui, nec condimentum diam auctor nec. Integer auctor
              turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem
              vitae tempor. Donec dictum lectus et bibendum faucibus. Integer
              mollis arcu sit amet mollis blandit. Nulla imperdiet molestie
              nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum
              in.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta ante dui, nec condimentum diam auctor nec. Integer auctor
              turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem
              vitae tempor. Donec dictum lectus et bibendum faucibus. Integer
              mollis arcu sit amet mollis blandit. Nulla imperdiet molestie
              nunc. Curabitur consectetur nulla massa, sed vehicula mi dictum
              in.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              porta ante dui, nec condimentum diam auctor nec. Integer auctor
              turpis odio, eu lacinia lorem ultricies at. Morbi maximus in sem
              vitae tempor. Donec dictum lectus et bibendum faucibus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
