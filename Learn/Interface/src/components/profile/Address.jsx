import React, { useState, useEffect } from "react";
import { Form, Select, Button, message, Modal, Input, Radio } from "antd";
import axios from "axios";

const { Option } = Select;

const App = () => {
  const [form] = Form.useForm(); // Use Ant Design Form for validation
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [isDefault, setIsDefault] = useState(false);

  // Danh sách địa chỉ (dữ liệu tĩnh, bạn có thể thay bằng API)
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      province: { code: 79, name: "Hồ Chí Minh" },
      district: { code: 760, name: "Quận Bình Thạnh" },
      ward: { code: 27127, name: "Phường 25" },
      street: "693 Xô Viết Nghệ Tĩnh",
      name: "Nguyễn Văn A",
      phone: "0988522939",
      type: "home",
      isDefault: true,
    },
    {
      id: 2,
      province: { code: 79, name: "Hồ Chí Minh" },
      district: { code: 760, name: "Quận Bình Thạnh" },
      ward: { code: 27127, name: "Phường 25" },
      street: "693 Xô Viết Nghệ Tĩnh",
      name: "Nguyễn Văn A",
      phone: "0988522939",
      type: "company",
      isDefault: false,
    },
  ]);

  // Lấy danh sách tỉnh/thành
  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/p/")
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => {
        message.error("Không thể tải danh sách tỉnh/thành!");
        console.error(error);
      });
  }, []);

  // Lấy danh sách quận/huyện khi chọn tỉnh/thành
  const handleProvinceChange = (provinceCode) => {
    setSelectedProvince(provinceCode);
    setDistricts([]);
    setWards([]);
    setSelectedDistrict(null);
    setSelectedWard(null);
    form.setFieldsValue({ district: null, ward: null });

    axios
      .get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
      .then((response) => {
        setDistricts(response.data.districts);
      })
      .catch((error) => {
        message.error("Không thể tải danh sách quận/huyện!");
        console.error(error);
      });
  };

  // Lấy danh sách phường/xã khi chọn quận/huyện
  const handleDistrictChange = (districtCode) => {
    setSelectedDistrict(districtCode);
    setWards([]);
    setSelectedWard(null);
    form.setFieldsValue({ ward: null });

    axios
      .get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
      .then((response) => {
        setWards(response.data.wards);
      })
      .catch((error) => {
        message.error("Không thể tải danh sách phường/xã!");
        console.error(error);
      });
  };

  // Xử lý khi chọn phường/xã
  const handleWardChange = (wardCode) => {
    setSelectedWard(wardCode);
  };

  // Mở modal để thêm địa chỉ mới
  const showAddModal = () => {
    setEditingAddress(null);
    setSelectedProvince(null);
    setSelectedDistrict(null);
    setSelectedWard(null);
    setDistricts([]);
    setWards([]);
    setIsDefault(false);
    form.resetFields();
    setIsModalVisible(true);
  };

  // Mở modal để chỉnh sửa địa chỉ
  const showEditModal = (address) => {
    setEditingAddress(address);
    setSelectedProvince(address.province.code);
    setSelectedDistrict(address.district.code);
    setSelectedWard(address.ward.code);
    setIsDefault(address.isDefault);

    // Điền dữ liệu vào form
    form.setFieldsValue({
      addressType: address.type,
      name: address.name,
      phone: address.phone,
      province: address.province.code,
      district: address.district.code,
      ward: address.ward.code,
      street: address.street,
    });

    // Lấy lại danh sách quận/huyện và phường/xã
    axios
      .get(
        `https://provinces.open-api.vn/api/p/${address.province.code}?depth=2`
      )
      .then((response) => {
        setDistricts(response.data.districts);
        axios
          .get(
            `https://provinces.open-api.vn/api/d/${address.district.code}?depth=2`
          )
          .then((res) => {
            setWards(res.data.wards);
            setIsModalVisible(true);
          });
      })
      .catch((error) => {
        message.error("Không thể tải dữ liệu để chỉnh sửa!");
        console.error(error);
      });
  };

  // Xử lý khi nhấn nút "Lưu thông tin"
  const handleSave = async () => {
    try {
      // Validate form fields
      await form.validateFields();

      const values = form.getFieldsValue();

      const province = provinces.find((p) => p.code === selectedProvince);
      const district = districts.find((d) => d.code === selectedDistrict);
      const ward = wards.find((w) => w.code === selectedWard);

      const newAddress = {
        id: editingAddress ? editingAddress.id : Date.now(),
        province,
        district,
        ward,
        street: values.street,
        name: values.name,
        phone: values.phone,
        type: values.addressType,
        isDefault,
      };

      if (editingAddress) {
        // Cập nhật địa chỉ
        setAddresses(
          addresses.map((addr) =>
            addr.id === editingAddress.id ? newAddress : addr
          )
        );
        message.success("Cập nhật địa chỉ thành công!");
      } else {
        // Thêm địa chỉ mới
        setAddresses([...addresses, newAddress]);
        message.success("Thêm địa chỉ thành công!");
      }

      setIsModalVisible(false);
      form.resetFields();
      setSelectedProvince(null);
      setSelectedDistrict(null);
      setSelectedWard(null);
      setDistricts([]);
      setWards([]);
      setIsDefault(false);
    } catch (error) {
      message.error("Vui lòng kiểm tra lại thông tin!");
      console.error("Validation failed:", error);
    }
  };

  // Xử lý xóa địa chỉ
  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    message.success("Xóa địa chỉ thành công!");
  };

  // Đóng modal
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingAddress(null);
    setSelectedProvince(null);
    setSelectedDistrict(null);
    setSelectedWard(null);
    setDistricts([]);
    setWards([]);
    setIsDefault(false);
    form.resetFields();
  };

  // Validate phone number format
  const validatePhoneNumber = (_, value) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!value) {
      return Promise.reject(new Error("Vui lòng nhập số điện thoại!"));
    }
    if (!phoneRegex.test(value)) {
      return Promise.reject(
        new Error("Số điện thoại phải có 10 chữ số và chỉ chứa số!")
      );
    }
    return Promise.resolve();
  };

  return (
    <div className="mt-1 h-150 bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Danh sách địa chỉ */}
        {addresses.map((address) => (
          <div key={address.id} className="mb-6">
            <h2 className="text-lg font-bold mb-2 flex items-center">
              {address.type === "home" ? (
                <span className="mr-2">🏠 ĐỊA CHỈ NHẬN HÀNG (MẶC ĐỊNH)</span>
              ) : (
                <span className="mr-2">🏢 ĐỊA CHỊ CÔNG TY</span>
              )}
            </h2>
            <div className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div>
                <p>
                  {address.street}, {address.ward.name}, {address.district.name}
                  , {address.province.name}
                </p>
                <p>{address.name}</p>
                <p>{address.phone}</p>
              </div>
              <div className="space-x-2">
                <Button type="link" onClick={() => showEditModal(address)}>
                  Sửa
                </Button>
                <Button
                  type="link"
                  danger
                  onClick={() => handleDelete(address.id)}
                >
                  Xóa
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Nút thêm địa chỉ mới */}
        <Button
          type="primary"
          className="bg-blue-500 hover:bg-blue-600"
          onClick={showAddModal}
        >
          + Thêm địa chỉ mới
        </Button>

        {/* Modal thêm/sửa địa chỉ */}
        <Modal
          title={editingAddress ? "Sửa địa chỉ" : "Thêm địa chỉ mới"}
          visible={isModalVisible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form form={form} layout="vertical">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Loại địa chỉ */}
              <Form.Item
                label="Loại địa chỉ"
                name="addressType"
                rules={[
                  { required: true, message: "Vui lòng chọn loại địa chỉ!" },
                ]}
              >
                <Select>
                  <Option value="home">Nhà</Option>
                  <Option value="company">Công ty</Option>
                </Select>
              </Form.Item>

              {/* Họ tên */}
              <Form.Item
                label="Họ tên"
                name="name"
                rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
              >
                <Input placeholder="Nhập họ tên" />
              </Form.Item>

              {/* Số điện thoại */}
              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[{ validator: validatePhoneNumber }]}
              >
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>

              {/* Tỉnh/Thành phố */}
              <Form.Item
                label="Tỉnh/Thành phố"
                name="province"
                rules={[
                  { required: true, message: "Vui lòng chọn tỉnh/thành phố!" },
                ]}
              >
                <Select
                  placeholder="Chọn tỉnh/thành"
                  onChange={handleProvinceChange}
                >
                  {provinces.map((province) => (
                    <Option key={province.code} value={province.code}>
                      {province.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Quận/Huyện */}
              <Form.Item
                label="Quận/Huyện"
                name="district"
                rules={[
                  { required: true, message: "Vui lòng chọn quận/huyện!" },
                ]}
              >
                <Select
                  placeholder="Chọn quận/huyện"
                  onChange={handleDistrictChange}
                  disabled={!selectedProvince}
                >
                  {districts.map((district) => (
                    <Option key={district.code} value={district.code}>
                      {district.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {/* Phường/Xã */}
              <Form.Item
                label="Phường/Xã"
                name="ward"
                rules={[
                  { required: true, message: "Vui lòng chọn phường/xã!" },
                ]}
              >
                <Select
                  placeholder="Chọn phường/xã"
                  onChange={handleWardChange}
                  disabled={!selectedDistrict}
                >
                  {wards.map((ward) => (
                    <Option key={ward.code} value={ward.code}>
                      {ward.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </div>

            {/* Địa chỉ cụ thể */}
            <Form.Item
              label="Địa chỉ cụ thể"
              name="street"
              rules={[
                { required: true, message: "Vui lòng nhập địa chỉ cụ thể!" },
              ]}
            >
              <Input placeholder="VD: Tòa nhà Toyota, Số 315 Trường Chinh" />
            </Form.Item>

            {/* Đặt làm mặc định */}
            <Form.Item>
              <Radio
                checked={isDefault}
                onChange={(e) => setIsDefault(e.target.checked)}
              >
                Đặt làm mặc định
              </Radio>
            </Form.Item>

            {/* Nút lưu thông tin */}
            <Button
              type="primary"
              className="w-full bg-orange-500 hover:bg-orange-600"
              onClick={handleSave}
            >
              Lưu thông tin
            </Button>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default App;
