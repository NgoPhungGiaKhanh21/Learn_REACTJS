import React from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  UserOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  CodeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

const Profile = () => {
  const location = useLocation();

  return (
    <div className="Profile">
      <Header />
      <div className="flex h-screen bg-gray-200 mt-20">
        <div className="w-1/4 h-115 bg-white mt-7">
          <div className="p-6">
            <div className="flex flex-col items-center mb-6">
              <Avatar size={64} icon={<UserOutlined />} />
              <h2 className="mt-2 text-lg font-semibold">NGUYỄN VĂN A</h2>
            </div>

            <div className="space-y-4">
              <Link
                to="/user-profile/profile"
                className={`flex items-center ${
                  location.pathname === "/user-profile/profile"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-600"
                }`}
              >
                <UserOutlined className="mr-2" />
                Thông tin cá nhân
              </Link>
              <Link
                to="/user-profile/address-settings"
                className={`flex items-center ${
                  location.pathname === "/user-profile/setting-address"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-600"
                }`}
              >
                <SettingOutlined className="mr-2" />
                Cài đặt địa chỉ
              </Link>
              <Link
                to="/user-profile/order-management"
                className={`flex items-center ${
                  location.pathname === "/user-profile/order-management"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-600"
                }`}
              >
                <ShoppingCartOutlined className="mr-2" />
                Quản lý đơn hàng
              </Link>
              <Link
                to="/user-profile/coupons"
                className={`flex items-center ${
                  location.pathname === "/user-profile/storage-code"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-600"
                }`}
              >
                <CodeOutlined className="mr-2" />
                Mã lưu trữ
              </Link>
              <Link
                to="/#"
                className={`flex items-center ${
                  location.pathname === "/user-profile/logout"
                    ? "text-orange-500 font-semibold"
                    : "text-gray-600"
                }`}
              >
                <LogoutOutlined className="mr-2" />
                Đăng xuất
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
