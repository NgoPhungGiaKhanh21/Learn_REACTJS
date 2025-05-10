import React, { useState } from "react";
import { Menu, Dropdown, Button, Modal, InputNumber } from "antd";
import {
  DownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  PlusOutlined,
  MinusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import axiosHandler from "../../components/config/axios"; // Import axiosHandler

const Header = ({ onSearch, cartCount, cart, updateCartQuantity, setCart }) => {
  const [isCartModalVisible, setIsCartModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const items = [
    { key: "1", label: <a href="/user-profile/profile">Thông tin cá nhân</a> },
    {
      key: "2",
      label: <a href="/user-profile/address-settings">Cài đặt địa chỉ</a>,
    },
    { key: "3", label: "Quản lí đơn hàng" },
    { key: "4", label: <a href="/user-profile/coupons">Mã đã lưu</a> },
    { key: "5", label: "Đăng xuất", danger: true },
  ];

  const fetchSearchResults = async (query) => {
    if (!query) {
      setSearchResults([]);
      setIsDropdownVisible(false);
      return;
    }
    try {
      const response = await axiosHandler.get(
        `/recipes/search?q=${encodeURIComponent(query)}&limit=10`
      );
      setSearchResults(response.data.recipes || []);
      setIsDropdownVisible(true);
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
      setSearchResults([]);
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    onSearch(value);
    fetchSearchResults(value);
  };

  const searchDropdownMenu = (
    <Menu>
      {searchResults.length > 0 ? (
        searchResults.map((recipe) => (
          <Menu.Item key={recipe.id}>
            <div className="flex items-center space-x-2">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span>{recipe.name}</span>
            </div>
          </Menu.Item>
        ))
      ) : (
        <Menu.Item disabled>Không tìm thấy kết quả</Menu.Item>
      )}
    </Menu>
  );

  const showCartModal = () => {
    setIsCartModalVisible(true);
  };

  const handleCartModalCancel = () => {
    setIsCartModalVisible(false);
    setSelectedItems([]);
  };

  const handleQuantityChange = (id, value) => {
    if (value >= 0) {
      updateCartQuantity(id, value);
    }
  };

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleDeleteSelected = async () => {
    try {
      const updatedCart = cart.filter(
        (item) => !selectedItems.includes(item.id)
      );

      if (updatedCart.length === 0) {
        setCart([]);
        setSelectedItems([]);
        return;
      }

      const productsForAPI = updatedCart.map((product) => ({
        id: product.id,
        quantity: product.quantity,
      }));

      const response = await axiosHandler.post("/carts/add", {
        userId: 1,
        products: productsForAPI,
      });

      if (response.data.products) {
        setCart(
          response.data.products.map((product) => ({
            ...product,
            name: updatedCart.find((item) => item.id === product.id)?.name,
            image: updatedCart.find((item) => item.id === product.id)?.image,
          }))
        );
        setSelectedItems([]);
      } else {
        console.error("Không có sản phẩm trả về từ API:", response.data);
      }
    } catch (error) {
      console.error("Lỗi khi xóa món khỏi giỏ hàng:", error);
    }
  };

  return (
    <div className="w-full bg-white fixed top-0 left-0 z-10">
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
        <div className="flex items-center space-x-15 mr-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm món ăn"
              className="py-1 focus:outline-none focus:ring-2 focus:ring-blue-300"
              value={searchValue}
              onChange={handleSearchChange}
            />
            <SearchOutlined className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            <Dropdown
              overlay={searchDropdownMenu}
              visible={isDropdownVisible && searchValue.length > 0}
              onVisibleChange={(visible) => setIsDropdownVisible(visible)}
            >
              <div className="absolute top-full left-0 w-full" />
            </Dropdown>
          </div>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a className="flex items-center text-gray-800 hover:text-blue-500">
              <UserOutlined className="mr-1" /> Tài khoản{" "}
              <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
          <div
            onClick={showCartModal}
            className="flex items-center text-gray-800 hover:text-blue-500 cursor-pointer"
          >
            <ShoppingCartOutlined className="mr-1" />
            <span className="relative">
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </span>
          </div>
        </div>
      </div>

      <Modal
        title="Giỏ hàng"
        open={isCartModalVisible}
        onCancel={handleCartModalCancel}
        footer={
          <div className="flex justify-between">
            <Button
              danger
              onClick={handleDeleteSelected}
              disabled={selectedItems.length === 0}
            >
              Xóa mục đã chọn
            </Button>
            <Button type="primary">Thanh toán</Button>
          </div>
        }
        width={600}
      >
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border-b"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                    className="mr-2"
                  />
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-4">
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    icon={<MinusOutlined />}
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    size="small"
                  />
                  <InputNumber
                    min={0}
                    value={item.quantity}
                    onChange={(value) => handleQuantityChange(item.id, value)}
                    className="w-16 text-center"
                  />
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                    size="small"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Giỏ hàng trống</p>
        )}
      </Modal>
    </div>
  );
};

export default Header;
