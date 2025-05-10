import React, { useState } from "react";
import { DatePicker } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import image from "/images/anh2.jpg";

const Order = () => {
  const [numberTable, setTable] = useState(0);

  // Tăng số bàn tiệc
  const handleIncrease = () => {
    setTable((prev) => prev + 1);
  };

  // Giảm số bàn tiệc (tối thiểu là 0)
  const handleDecrease = () => {
    setTable((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div
      className="relative h-96 bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-50 flex items-center justify-between px-10">
        {/* Phần tiêu đề và mô tả */}
        <div className="text-white w-1/3">
          <h1 className="text-5xl font-bold">ĐẶT TIỆC Ở ĐÂY</h1>
          <p className="text-lg mt-2 mb-6">
            Đặt tiệc ngay hôm nay để những sự kiện quan trọng của bạn trở nên
            đơn giản và dễ dàng hơn bao giờ hết
          </p>
        </div>

        {/* Phần chọn ngày và số bàn tiệc */}
        <div className="flex items-center space-x-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center space-x-2">
              <span className="text-center text-white font-bold">
                CHỌN NGÀY ĐẶT
              </span>
              <DatePicker
                placeholder=""
                format="DD/MM"
                className="h-8 w-8 text-center border-none"
                suffixIcon={<DownOutlined className="text-white" />}
                dropdownAlign={{ offset: [0, 5] }}
                style={{ background: "transparent", padding: 0 }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-center text-white font-bold">
              SỐ BÀN TIỆC
            </span>
            <div className="flex items-center space-x-4">
              <DownOutlined
                onClick={handleDecrease}
                className="text-white cursor-pointer"
                style={{ color: "white" }}
              />
              <span className="text-2xl text-white">{numberTable}</span>
              <UpOutlined
                onClick={handleIncrease}
                className="text-white cursor-pointer"
                style={{ color: "white" }}
              />
            </div>
          </div>
        </div>

        {/* Phần nút bấm */}
        <div className="flex flex-col space-y-4">
          <button className="h-12 bg-blue-600 border-none text-white font-bold">
            ĐẶT TIỆC NGAY
          </button>
          <button className="h-12 border border-white text-white">
            XEM THỰC ĐƠN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
