import React from "react";
import { Form, Input, Select, Button } from "antd";

const { Option } = Select;

const Info = () => {
  const onFinish = (values) => {
    console.log("Form value:", values);
  };

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Giới thiệu</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          fullName: "",
          gender: "Lựa chọn",
          phone: "",
          day: "Ngày",
          month: "Tháng",
          year: "Năm",
          email: "",
        }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Form.Item label="Họ tên" name="fullName">
              <Input placeholder="Nhập họ và tên" />
            </Form.Item>
            <Form.Item label="Giới tính" name="gender">
              <Select>
                <Option value="Lựa chọn">Lựa chọn</Option>
                <Option value="Nam">Nam</Option>
                <Option value="Nữ">Nữ</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Số điện thoại" name="phone">
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>
            <Form.Item label="Ngày sinh">
              <div className="flex flex-items">
                <Form.Item name="day" noStyle className="w-1/3">
                  <Select>
                    <Option value="Ngày">Ngày</Option>
                    {[...Array(31)].map((_, i) => (
                      <Option key={i + 1} value={i + 1}>
                        {i + 1}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="month" noStyle className="w-1/3">
                  <Select>
                    <Option value="Tháng">Tháng</Option>
                    {[...Array(12)].map((_, i) => (
                      <Option key={i + 1} value={i + 1}>
                        {i + 1}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item name="year" noStyle className="w-1/3">
                  <Select>
                    <Option value="Năm">Năm</Option>
                    {[...Array(100)].map((_, i) => (
                      <Option key={2025 - i} value={2025 - i}>
                        {2025 - i}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item label="Email" name="email">
              <Input placeholder="Nhập email nhận ưu đãi" />
            </Form.Item>
          </div>
        </div>
        <Form.Item>
          <Button
            style={{
              backgroundColor: "orange",
              color: "white",
              marginLeft: "450px",
              padding: "20px 20px",
            }}
            htmlType="submit"
          >
            Lưu thông tin
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Info;
