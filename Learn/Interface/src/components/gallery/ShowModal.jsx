import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import { X } from "lucide-react"; // Import icon đóng

const PromoModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Hiển thị modal khi component được mount (tức là khi trang tải)
  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  // Hàm xử lý đóng modal
  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      open={isModalVisible}
      onCancel={handleClose}
      footer={null} // Ẩn footer mặc định
      centered // Căn giữa modal
      width={600} // Chiều rộng modal
      bodyStyle={{ padding: 0, borderRadius: "10px", overflow: "hidden" }} // Tùy chỉnh body của modal
      closeIcon={null} // Ẩn nút đóng mặc định của Ant Design
    >
      <div className="relative border-4 border-white rounded-md">
        {/* Hình ảnh quảng cáo */}
        <div className="flex items-center justify-center">
          <img
            src="https://intern-project-chi.vercel.app/static/media/popupGallerry.8ccfc069f2132221f271.png" // Thay thế bằng URL của hình ảnh thực tế
            alt="Christmas Pizza Sale"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Nút đóng tùy chỉnh ở bên ngoài và dưới modal */}
      <button
        className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full shadow-lg border-2 border-gray-300 hover:bg-gray-100 transition-colors"
        onClick={handleClose}
      >
        <X className="text-black" size={24} />
      </button>
    </Modal>
  );
};

export default PromoModal;
