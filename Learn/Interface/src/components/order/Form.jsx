import React from "react";
import { Form, Input, DatePicker, Select, Checkbox, Button } from "antd";
import img1 from "/images/anh1.jpg";
const { Option } = Select;

const FormOrder = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen  bg-cover bg-center"
      style={{
        backgroundImage: `url(${img1})`,
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-center mb-4">
          LIÊN HỆ ĐẶT TIỆC
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Quý khách hàng điền thông tin để được hỗ trợ và tư vấn đặt tiệc ngay
          hôm nay!
        </p>
        <Form name="party_booking" layout="vertical" onFinish={onFinish}>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2">
              <Form.Item
                label="Nhập họ và tên"
                name="name"
                rules={[
                  { required: true, message: "Vui lòng nhập họ và tên!" },
                ]}
              >
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>

              <Form.Item
                label="Nhập số điện thoại"
                name="phone"
                rules={[
                  { required: true, message: "Vui lòng nhập số điện thoại!" },
                ]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>

              <Form.Item
                label="Địa chỉ tổ chức sự kiện"
                name="address"
                rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
              >
                <Input placeholder="Địa chỉ tổ chức sự kiện" />
              </Form.Item>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <Form.Item
                label="Chọn số lượng khách"
                name="guestCount"
                rules={[
                  { required: true, message: "Vui lòng chọn số lượng khách!" },
                ]}
              >
                <Select placeholder="Chọn số lượng khách">
                  <Option value="10-20">10-20 khách</Option>
                  <Option value="20-50">20-50 khách</Option>
                  <Option value="50-100">50-100 khách</Option>
                  <Option value="100+">Trên 100 khách</Option>
                </Select>
              </Form.Item>

              <Form.Item
                label="Chọn ngày tổ chức"
                name="date"
                rules={[
                  { required: true, message: "Vui lòng chọn ngày tổ chức!" },
                ]}
              >
                <DatePicker format="DD/MM/YYYY" className="w-full" />
              </Form.Item>

              <Form.Item
                label="Loại sự kiện"
                name="eventType"
                rules={[
                  { required: true, message: "Vui lòng chọn loại sự kiện!" },
                ]}
              >
                <Select placeholder="Loại sự kiện">
                  <Option value="sinh-nhat">Sinh nhật</Option>
                  <Option value="cuoi-hoi">Cưới hỏi</Option>
                  <Option value="hoi-nghi">Hội nghị</Option>
                  <Option value="khac">Khác</Option>
                </Select>
              </Form.Item>
            </div>
          </div>

          <Form.Item
            name="receiveInfo"
            valuePropName="checked"
            className="text-center"
          >
            <Checkbox>
              Nhận tư vấn trước mọi sự kiện (MC, ánh sáng, sân khấu...)
            </Checkbox>
          </Form.Item>

          <p className="text-center text-red-600 mb-4">
            Họ tên không được để trống!
          </p>

          <Form.Item>
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "orange",
                color: "white",
                marginLeft: "270px",
              }}
            >
              Gửi thông tin ngay
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormOrder;
