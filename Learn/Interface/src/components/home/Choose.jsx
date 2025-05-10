import React from "react";
import { Card } from "antd";
import img1 from "/images/anh6.jpg";
import img2 from "/images/anh7.jpg";
import img3 from "/images/anh8.jpg";
import img4 from "/images/anh9.jpg";

const Choose = () => {
  const content = [
    {
      image: img1,
      title: "SỰ LỰA CHỌN ẨM THỰC SỐ 1",
      description:
        "Thuộc GOLDEN GATE Group - 15 năm kinh nghiệm, hơn 400 nhà hàng toàn quốc",
    },
    {
      image: img2,
      title: "THƯC ĐƠN ĐA DẠNG TOÀN",
      description:
        "Đồ ăn ba miền, đủ các món từ nguồn cung cấp đạt chuẩn châu Âu",
    },
    {
      image: img3,
      title: "THỰC ĐƠN ĐA DẠNG",
      description:
        "Menu phong phú, kết hợp tinh hoa ẩm thực Á - Âu, đa dạng lựa chọn",
    },
    {
      image: img4,
      title: "PHỤC VỤ CHUYÊN NGHIỆP",
      description:
        "Không gian sang trọng, dịch vụ chu đáo, đội ngũ tận tâm luôn sẵn lòng",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        VÌ SAO LỰA CHỌN CHÚNG TÔI?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {content.map((reason, index) => (
          <Card
            key={index}
            hoverable
            cover={
              <img
                alt={reason.title}
                src={reason.image}
                className="h-48 w-full object-cover object-center"
              />
            }
            className="shadow-none"
          >
            <Card.Meta
              title={<h3 className="text-lg font-semibold">{reason.title}</h3>}
              description={
                <p className="text-gray-600">{reason.description}</p>
              }
            />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Choose;
