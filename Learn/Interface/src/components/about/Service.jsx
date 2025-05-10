import React from "react";

const Service = () => {
  const content = [
    {
      image: "/images/anh10.jpg",
      title: "THỰC PHẨM ĂN TOÀN CHẤT LƯỢNG NHÀ HÀNG",
    },
    {
      image: "/images/anh11.jpg",
      title: "DỊCH VỤ CHU ĐÁO CHÂM SÓC TẬN TÂM",
    },
    {
      image: "/images/anh10.jpg",
      title: "ĐỒNG HÀNH TRONG MỌI LỰA CHỌN ÂM THỰC",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          TÔN CHỈ PHỤC VỤ
        </h1>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          porta ante dui, nec condimentum diam auctor nec. Integer auctor turpis
          odio, eu lacinia lorem ultricies at.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {content.map((content, index) => (
          <div key={index} className="text-center">
            <div className="overflow-hidden rounded-lg mb-4">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {content.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Service;
