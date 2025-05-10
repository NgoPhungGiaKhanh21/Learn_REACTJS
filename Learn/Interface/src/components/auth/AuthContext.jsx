import React, { createContext, useState, useContext } from "react";

// Tạo context để quản lý trạng thái xác thực
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State quản lý trạng thái đăng nhập và dropdown
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kiểm tra đã đăng nhập chưa
  const [dropdownOpen, setDropdownOpen] = useState(false); // Trạng thái dropdown (menu người dùng)

  // Hàm xử lý khi đăng nhập thành công
  const handleLoginSuccess = (token) => {
    localStorage.setItem("token", token); // Lưu token vào localStorage
    setIsLoggedIn(true); // Cập nhật trạng thái đăng nhập
    setDropdownOpen(true); // Mở dropdown (nếu cần)
  };

  // Cung cấp các giá trị cho context
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        dropdownOpen,
        setDropdownOpen,
        handleLoginSuccess,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth phải được dùng trong AuthProvider");
  }
  return context;
};
