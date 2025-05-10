import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import img1 from "/images/anh4.webp";
import img2 from "/images/anh5.webp";

const Menu = () => {
  return (
    <div className="mt-10 p-6 bg-white-100 min-h-screen">
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} md={6}>
          <div className="bg-gray-800 text-white p-20 rounded-lg shadow-lg mb-6">
            <h2 className="text-2xl text-center font-bold mb-4">DỊCH VỤ</h2>
            <div className="flex flex-col items-center">
              <div className="flex space-x-4 mb-2">
                <span>Tiệc tại gia</span>
                <span>Tiệc Buffet</span>
              </div>
              <div className="flex space-x-4 mb-2">
                <span>Tiệc cưới hỏi</span>
                <span>Tiệc sự kiện</span>
              </div>
              <div>
                <span>Tiệc Tea Break</span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-200 p-20 rounded-lg shadow-lg text-center text-white">
            <h2 className="text-xl font-bold">LIÊN HỆ</h2>
            <p>Address: abc@cmcglobal.vn</p>
            <p>Hotline: 0919319077</p>
          </div>
        </Col>

        <Col xs={24} md={9}>
          <div
            className="relative h-135 bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center"
            style={{
              backgroundImage: `url(${img1})`, // Đường dẫn ảnh
            }}
          >
            <div className="absolute inset-0  bg-opacity-20 flex flex-col items-center justify-center">
              <h2 className="text-4xl text-white font-bold mb-2 top-0">
                SET MENU
              </h2>
              <Link
                to="/about"
                className="text-white text-2xl font-bold mb-4 block"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={24} md={9}>
          <div
            className="relative h-135 bg-cover bg-center rounded-lg shadow-lg flex items-center justify-center"
            style={{
              backgroundImage: `url(${img2})`,
            }}
          >
            <div className="absolute inset-0  bg-opacity-20 flex flex-col items-center justify-center">
              <h2 className="text-4xl text-white font-bold mb-2 top-0">
                SET MENU
              </h2>
              <Link
                to="/about"
                className="text-blue-500 text-2xl font-bold mb-4 block"
              >
                Xem chi tiết
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Menu;
