import React from "react";
import {
  BookOutlined,
  FileTextOutlined,
  UserOutlined,
  WalletOutlined,
} from "@ant-design/icons";

const PartyBookingSteps = () => {
  const steps = [
    {
      icon: <BookOutlined style={{ fontSize: "32px" }} />,
      title: "TÌM HIỂU THÔNG TIN",
      description: "Khách hàng tìm hiểu thông tin và đăng ký tư vấn",
    },
    {
      icon: <FileTextOutlined style={{ fontSize: "32px" }} />,
      title: "LIÊN HỆ TƯ VẤN",
      description: "Khách hàng tìm hiểu thông tin và đăng ký tư vấn",
    },
    {
      icon: <UserOutlined style={{ fontSize: "32px" }} />,
      title: "KÝ KẾT HỢP ĐỒNG",
      description: "Khách hàng tìm hiểu thông tin và đăng ký tư vấn",
    },
    {
      icon: <WalletOutlined style={{ fontSize: "32px" }} />,
      title: "PHỤC VỤ TIỆC",
      description: "Khách hàng tìm hiểu thông tin và đăng ký tư vấn",
    },
    {
      icon: <BookOutlined style={{ fontSize: "32px" }} />,
      title: "THANH TOÁN",
      description: "Khách hàng tìm hiểu thông tin và đăng ký tư vấn",
    },
  ];

  return (
    <div className="py-10 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        5 BƯỚC ĐỂ ĐẶT TIỆC
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {steps.map((step, index) => (
          <div key={index} className="relative flex-1 text-center">
            <div className="relative flex justify-center items-center">
              <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center shadow-md">
                {step.icon}
              </div>
            </div>

            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-3/4 w-1/2 h-1 border-dashed border-2 border-gray-400"></div>
            )}
            <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartyBookingSteps;
