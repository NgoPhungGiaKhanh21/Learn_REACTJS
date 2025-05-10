import { useState } from 'react';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    guests: 0,
    eventDate: '',
    eventType: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address || !formData.eventDate || !formData.eventType) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    if (!formData.agree) {
      alert('Bạn cần đồng ý điều khoản!');
      return;
    }
    alert(`Thông tin đăng ký:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-white bg-opacity-50"
      style={{
        backgroundImage: `url('/images/comnieu.jpg')`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
        <h2 className="text-2xl font-bold text-center">Liên Hệ Đặt Tiệc</h2>
        <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h4>
        <form className="grid grid-cols-2 gap-6 mt-6" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Họ và tên" value={formData.name} onChange={handleChange} className="border p-2 rounded" />
          <input type="number" name="guests" placeholder="Số lượng khách" value={formData.guests} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="phone" placeholder="Số điện thoại" value={formData.phone} onChange={handleChange} className="border p-2 rounded" />
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="address" placeholder="Địa chỉ" value={formData.address} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="eventType" placeholder="Loại sự kiện" value={formData.eventType} onChange={handleChange} className="border p-2 rounded" />
          <label className="col-span-2 flex items-center">
            <input type="checkbox" name="agree" checked={formData.agree} onChange={handleChange} className="mr-2" />
            Nhận tư vấn trọn gói sự kiện (MC, ánh sáng, sân khấu,…)
          </label>
          <button type="submit" className="col-span-2 bg-orange-500 text-white p-2 rounded">Gửi Thông Tin</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
