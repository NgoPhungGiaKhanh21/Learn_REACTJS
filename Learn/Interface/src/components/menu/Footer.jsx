import React from "react";
import { FacebookOutlined, YoutubeOutlined } from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white py-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
        <div>
          <h3 className="text-lg font-bold mb-2">Về chúng tôi</h3>
          <p>Số điện thoại: 095.366.4722</p>
          <p>Địa chỉ: số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Phương thức thanh toán</h3>
          <div className="flex space-x-2">
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
          </div>
          <div className="flex space-x-2 mt-2">
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
            <img
              src="https://intern-project-chi.vercel.app/static/media/mastercard.5544c763e24453b25748.png"
              alt="Master Card"
              className="w-20 h-20"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Truyền thông xã hội</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/angi.homnayy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookOutlined className="text-2xl" />
              Facebook
            </a>
            <a
              href="https://www.youtube.com/channel/UCu-dRjIS5WctBye76rvzRQA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeOutlined className="text-2xl" />
              Youtube
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Hỗ trợ khách hàng</h3>
          <p>Liên hệ Hotline: 036.555.1123</p>
          <p className="pl-10 py-3">Email: happy.@gmal.com</p>
          <p>Địa chỉ: Số 33 Nhân Chính, Trung Hòa, Cầu Giấy, Hà Nội</p>
        </div>
      </div>
      <div className="flex border-t border-black-700 mt-6 pt-4 ">
        <div className="ml-10">
          <p>Công ty TNHH Minh Trí</p>
          <p>Số GCNĐKDN: cập ngay 2/1/2020</p>
        </div>
        <div className="mt-2 ml-200 w-50">
          <img
            src="https://dangkywebvoibocongthuong.com/wp-content/uploads/2021/11/logo-da-thong-bao-bo-cong-thuong.png"
            alt="Certified"
            className="inline-block h-6"
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
