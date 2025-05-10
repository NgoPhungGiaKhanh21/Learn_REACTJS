import React from "react";
import { Dropdown, Button } from "antd";
import { Link } from "react-router-dom";
import {
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useTheme } from "../config/ThemeContext";
import { useAuth } from "../auth/AuthContext";

const Header = () => {
  const [cartCount] = React.useState(1);
  const { darkMode, toggleDarkMode } = useTheme();
  const { isLoggedIn, setIsLoggedIn, dropdownOpen, setDropdownOpen } =
    useAuth();

  const items = [
    {
      key: "1",
      label: <Link to="/user-profile/profile">Thông tin cá nhân</Link>,
    },
    {
      key: "2",
      label: <Link to="/user-profile/address-settings">Cài đặt địa chỉ</Link>,
    },
    { key: "3", label: "Quản lí đơn hàng" },
    { key: "4", label: <Link to="/user-profile/coupons">Mã đã lưu</Link> },
    {
      key: "5",
      label: "Đăng xuất",
      danger: true,
      onClick: () => setIsLoggedIn(false),
    },
  ];

  return (
    <div className="header">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex space-x-8">
          <Link to="/" className="header-link">
            Trang chủ
          </Link>
          <Link to="/menu" className="header-link">
            Thực đơn
          </Link>
          <Link to="/about" className="header-link">
            Về chúng tôi
          </Link>
          <Link to="/new" className="header-link">
            Tin tức
          </Link>
          <Link to="/order" className="order-button px-3 py-1">
            Đặt tiệc ngay
          </Link>
        </div>
        <div className="flex items-center space-x-6 mr-10">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Tìm kiếm món ăn"
              className="search-input py-1 px-2 rounded"
            />
            <SearchOutlined className="icon ml-2" />
          </div>
          {isLoggedIn ? (
            <Dropdown
              menu={{ items }}
              trigger={["click"]}
              open={dropdownOpen}
              onOpenChange={(open) => setDropdownOpen(open)}
            >
              <a className="flex items-center header-link">
                <UserOutlined className="icon mr-1" />
                Tài khoản <DownOutlined className="icon ml-1" />
              </a>
            </Dropdown>
          ) : (
            <Link to="/login" className="flex items-center header-link">
              <UserOutlined className="icon mr-1" />
              Đăng nhập
            </Link>
          )}
          <Link to="#" className="flex items-center header-link">
            <ShoppingCartOutlined className="icon mr-1" />
            <span className="relative">
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </span>
          </Link>
          <Button onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
