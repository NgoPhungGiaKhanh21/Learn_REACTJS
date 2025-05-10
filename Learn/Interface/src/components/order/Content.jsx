import React from "react";
import { Divider } from "antd";

const Content = () => {
  return (
    <div className="container mx-auto h-100 mt-20 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-50">
        <div className="font-bold mt-16">Map chỉ đường ở đây</div>
        <div>
          <h2 className="text-2xl font-bold mb-10">Công ty</h2>
          <p className="ml-10 mb-5">
            Email:<strong>abc@gmail.com</strong>
          </p>
          <p className="ml-10 mb-5">
            Địa chỉ:<strong>Số 8 Duy Tân</strong>
          </p>
          <p className="ml-10 mb-5">Giấy phép linh doanh</p>
          <p className="ml-10 mb-5">
            <strong>Số 12 Ngày:dd/mm/yy</strong>
          </p>
        </div>
        <div className="font-bold mt-16">
          <p className="mb-5">Làm việc: 8h sáng đến 23h tối</p>
          <p>Hotline:00adas0012123123123</p>
        </div>
      </div>
    </div>
  );
};
export default Content;
