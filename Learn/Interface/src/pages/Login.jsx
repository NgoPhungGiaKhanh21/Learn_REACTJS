import React, { useState } from "react";
import { Button, Input, Spin, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/auth/AuthContext";
import axiosHandler from "../components/config/axios";
import img1 from "/images/anh1.jpg";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn, handleLoginSuccess } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosHandler.post("/auth/login", {
        username: username,
        password: password,
        expiresInMins: 30,
      });

      if (response.status === 200) {
        setIsLoggedIn(true);
        handleLoginSuccess(response.data.token);
        message.success("Đăng nhập thành công!");
        navigate("/");
      }
    } catch (error) {
      message.error(
        error.response?.data?.message || "Đăng nhập thất bại. Vui lòng thử lại"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Đăng Nhập</h2>
          <p className="text-gray-600">Vui lòng nhập thông tin của bạn</p>
        </div>

        <Spin spinning={loading}>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <Input
                prefix={<UserOutlined className="text-gray-400" />}
                placeholder="Tên đăng nhập"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                size="large"
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
              />
            </div>

            <div>
              <Input.Password
                prefix={<LockOutlined className="text-gray-400" />}
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                size="large"
                className="rounded-lg border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 transition-all"
              />
            </div>

            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              size="large"
              className="bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors h-12 font-medium"
            >
              Đăng nhập
            </Button>

            <div className="text-center text-sm">
              <a href="#" className="text-blue-600 hover:underline">
                Quên mật khẩu?
              </a>
            </div>
          </form>
        </Spin>
      </div>
    </div>
  );
};

export default LoginForm;
