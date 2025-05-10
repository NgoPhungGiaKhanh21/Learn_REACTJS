import axios from "axios";

// Tạo instance axios với cấu hình mặc định
const axiosHandler = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    Accept: "application/json",
  },
});

// Interceptor cho request: Thêm token vào header nếu có
axiosHandler.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Lấy token từ localStorage
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config; // Trả về config đã chỉnh sửa
  },
  (error) => {
    console.error("Lỗi khi gửi request:", error); // Log lỗi để debug
    return Promise.reject(error); // Reject lỗi để xử lý tiếp
  }
);

// Interceptor cho response: Xử lý lỗi từ server
axiosHandler.interceptors.response.use(
  (response) => {
    return response; // Trả về response nếu thành công
  },
  (error) => {
    const { response } = error;
    if (response?.status === 401) {
      // Token hết hạn hoặc không hợp lệ
      localStorage.removeItem("token"); // Xóa token
      window.location.href = "/login"; // Chuyển hướng về trang đăng nhập
    } else if (response?.status === 403) {
      // Không có quyền truy cập
      console.warn("Bạn không có quyền truy cập tài nguyên này.");
    }
    return Promise.reject(error); // Reject lỗi để component xử lý
  }
);

export default axiosHandler;
