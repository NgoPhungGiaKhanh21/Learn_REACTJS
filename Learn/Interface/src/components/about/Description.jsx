import React from "react";
import {
  HeartOutlined,
  ForkOutlined,
  CoffeeOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

const Description = () => {
  const content = [
    {
      icon: <HeartOutlined style={{ fontSize: "32px" }} />,
      title: "TIỆC TẠI GIA",
      description:
        "Tiết kiệm thời gian cho bữa tiệc ấm cúng, dành trọn khoảnh khắc sum vầy bên người thân yêu - Bạn chỉ cần lựa chọn thực đơn yêu thích, Tiệc tại gia sẽ mang trải nghiệm trọn vẹn đến với gia đình",
    },
    {
      icon: <ForkOutlined style={{ fontSize: "32px" }} />,
      title: "TIỆC BUFFET",
      description:
        "Tiệc buffet với nhiều lựa chọn thực đơn đa dạng dành cho các sự kiện lớn nhò, từ các hoạt động mở và có nhiều thời gian như gala dinner đến liên hoan nội bộ hay tiệc gia đình.",
    },
    {
      icon: <CoffeeOutlined style={{ fontSize: "32px" }} />,
      title: "TIỆC TEA BREAK",
      description:
        "Tea break được tổ chức dưới hình thức tiệc đứng với trà, bánh ngọt, và hoa quả, diễn ra vào giữa giờ giải lao của các buổi hội nghị, khai trương,... giúp khách mời có khoảng thời gian thư giãn trước khi tiếp tục tham dự sự kiện.",
    },
    {
      icon: <HeartOutlined style={{ fontSize: "32px" }} />,
      title: "TIỆC CƯỚI HỎI",
      description:
        "Sự kiện đặc biệt, không thể thiếu đội ngũ tận tâm. Với thực đơn phong phú từ truyền thống tới hiện đại, cùng đội ngũ phục vụ chuyên nghiệp, Tiệc tại gia sẽ đồng hành cùng bạn và gia đình trong ngày vui một cách trọn vẹn nhất",
    },
    {
      icon: <CalendarOutlined style={{ fontSize: "32px" }} />,
      title: "TIỆC SỰ KIỆN",
      description:
        "Tiệc tại gia sẽ giúp bạn lo chu toàn các sự kiện lớn cho công ty, hội thảo cần sự chìn chu từ khâu chuẩn bị tới quy trình phục vụ chuyên nghiệp, đảm bảo hài lòng mọi khách hàng tham dự",
    },
  ];
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-200">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        DỊCH VỤ CAO CẤP
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-20">
        {content.map((content, index) => (
          <div key={index} className="p-6">
            <div className="text-4xl mb-4">{content.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {content.title}
            </h2>
            <p className="text-gray-600 text-sm">{content.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Description;
