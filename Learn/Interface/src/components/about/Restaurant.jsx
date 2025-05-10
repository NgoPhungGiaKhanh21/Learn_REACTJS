import React from "react";

const Restaurant = () => {
  return (
    <div
      className="relative w-full h-100 bg-cover bg-center mb-10 py-12"
      style={{
        backgroundImage: "url('/images/anh7.jpg')",
        backgroundColor: "#4a2c2a",
        filter: "blur(1px)",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto px-4 text-white text-center">
        <h1 className="text-5xl font-bold mb-8">TIỆC TẠI GIA CHẤT NHÀ HÀNG</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-4">
            <h2 className="text-4xl font-bold">80+</h2>
            <p className="text-sm">MÓN ĂN ĐA DẠNG</p>
          </div>
          <div className="p-4">
            <h2 className="text-4xl font-bold">6+</h2>
            <p className="text-sm">SET MENU TIẾU CHUẨN</p>
          </div>
          <div className="p-4">
            <h2 className="text-4xl font-bold">15+</h2>
            <p className="text-sm">NĂM KINH NGHIỆM</p>
          </div>
          <div className="p-4">
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-sm">NHÂN VIÊN CHUYÊN NGHIỆP</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Restaurant;
