import React, { useEffect, useState } from "react";

const DetailUser = ({ id }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;

    const fetchUser = async () => {
      setLoading(true);
      try {
        const data = await fetch(`https://dummyjson.com/users/${id}`);
        const response = await data.json();
        setUser(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (!id) return <div className="text-center">Chưa chọn người dùng</div>;
  if (loading) return <div className="text-center">Đang tải thông tin...</div>;
  if (!user)
    return <div className="text-center">Không tìm thấy người dùng</div>;

  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-bold">
        {user.firstName} {user.lastName} {user.maidenName}
      </h2>
      <p>
        <strong className="pr-5">Giới tính:</strong> {user.gender}
      </p>
      <p>
        <strong className="pr-5">Tuổi:</strong> {user.age}
      </p>
      <p>
        <strong className="pr-5">Email:</strong> {user.email}
      </p>
      <p>
        <strong className="pr-5">SĐT:</strong> {user.phone}
      </p>
      <p>
        <strong className="pr-5">Username:</strong> {user.username}
      </p>
      <p>
        <strong className="pr-5">Password:</strong> {user.password}
      </p>
      <p>
        <strong className="pr-5">Ngày sinh nhật:</strong> {user.birthDate}
      </p>
      <p>
        <strong className="pr-5">Nhóm máu:</strong> {user.bloodGroup}
      </p>
      <p>
        <strong className="pr-5">Chiều cao:</strong> {user.height} cm
      </p>
      <p>
        <strong className="pr-5">Cân nặng:</strong> {user.weight} kg
      </p>
      <p>
        <strong className="pr-5">Màu mắt:</strong> {user.eyeColor}
      </p>
      <p>
        <strong className="pr-5">Màu tóc:</strong> {user.hair?.color}
        <strong className="pl-3 pr-5">Loại tóc:</strong> {user.hair?.type}
      </p>

      <img
        src={user.image}
        alt={user.firstName}
        className="w-32 h-32 rounded-full mt-2"
      />

      <h3 className="mt-4 text-lg font-bold">Địa chỉ</h3>
      <p>
        <strong className="pr-5">Đường:</strong> {user.address?.address}
      </p>
      <p>
        <strong className="pr-5">Thành phố:</strong> {user.address?.city}
      </p>
      <p>
        <strong className="pr-5">Bang:</strong> {user.address?.state}
      </p>
      <p>
        <strong className="pr-5">Mã bang:</strong> {user.address?.stateCode}
      </p>
      <p>
        <strong className="pr-5">Mã bưu điện:</strong>{" "}
        {user.address?.postalCode}
      </p>
      <p>
        <strong className="pr-5">Đất nước:</strong> {user.address?.country}
      </p>

      <h3 className="mt-4 text-lg font-bold">Ngân hàng</h3>
      <p>
        <strong className="pr-5">Card expired:</strong> {user.bank?.cardExpire}
      </p>
      <p>
        <strong className="pr-5">Card number:</strong> {user.bank?.cardNumber}
      </p>
      <p>
        <strong className="pr-5">Card type:</strong> {user.bank?.cardType}
      </p>
      <p>
        <strong className="pr-5">Currency:</strong> {user.bank?.currency}
      </p>
      <p>
        <strong className="pr-5">Iban:</strong> {user.bank?.iban}
      </p>

      <h3 className="mt-4 text-lg font-bold">Công ty</h3>
      <p>
        <strong className="pr-5">Phòng ban:</strong> {user.company?.department}
      </p>
      <p>
        <strong className="pr-5">Tên công ty:</strong> {user.company?.name}
      </p>
      <p>
        <strong className="pr-5">Title:</strong> {user.company?.title}
      </p>
      <p>
        <strong className="pr-5">Địa chỉ:</strong>
        {user.company?.address?.address}, {user.company?.address?.city},{" "}
        {user.company?.address?.state} ({user.company?.address?.stateCode})
      </p>
    </div>
  );
};

export default DetailUser;
