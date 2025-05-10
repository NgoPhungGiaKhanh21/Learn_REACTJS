import { useEffect, useState } from "react";
import DetailRecipe from "./DetailRecipes";
import { Button, Modal, Pagination } from "antd";
import axiosHandler from "../config/axios"; // Import axiosHandler

const Detail = ({ search, onAddToCart }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [idRecipe, setIdRecipe] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [total, setTotal] = useState(0);
  const [sortOrder, setSortOrder] = useState("asc");

  // Hàm lấy danh sách món ăn từ API
  const fetchData = async (query, page, order) => {
    setLoading(true);
    try {
      const skip = (page - 1) * pageSize;
      let url;
      if (query) {
        // Nếu có từ khóa tìm kiếm, gọi API search
        url = `/recipes/search?q=${encodeURIComponent(
          query
        )}&limit=${pageSize}&skip=${skip}`;
      } else {
        // Nếu không có từ khóa, lấy danh sách món ăn với sắp xếp
        url = `/recipes?limit=${pageSize}&skip=${skip}&sortBy=name&order=${order}`;
      }
      // Sử dụng axiosHandler để gửi request GET
      const response = await axiosHandler.get(url);
      setData(response.data.recipes); // Lấy danh sách món ăn từ response
      setTotal(response.data.total); // Lấy tổng số món ăn
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu:", error);
    } finally {
      setLoading(false);
    }
  };

  // Gọi API mỗi khi search, currentPage hoặc sortOrder thay đổi
  useEffect(() => {
    fetchData(search, currentPage, sortOrder);
  }, [search, currentPage, sortOrder]);

  const showModal = (id) => {
    setIdRecipe(id);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setIdRecipe("");
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleAddToCart = (recipe) => {
    onAddToCart({
      id: recipe.id,
      name: recipe.name,
      image: recipe.image,
      quantity: 1,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-600">Đang tải...</div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Thực Đơn Món Ăn
      </h1>
      <div className="w-full mx-auto">
        <div className="bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Danh sách món ăn
          </h2>
          <div className="flex gap-4 mb-4">
            <Button onClick={handleSort}>
              Sắp xếp theo tên ({sortOrder === "asc" ? "A-Z" : "Z-A"})
            </Button>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {data.length > 0 ? (
              data.map((recipe) => (
                <div
                  key={recipe.id}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 border border-gray-200"
                >
                  <div className="flex flex-col items-center gap-4">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <p className="font-semibold text-gray-800">
                        {recipe.name}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {recipe.tags?.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <Button
                          style={{ backgroundColor: "red", color: "white" }}
                          onClick={() => showModal(recipe.id)}
                        >
                          Xem chi tiết
                        </Button>
                        <Button
                          style={{ backgroundColor: "green", color: "white" }}
                          onClick={() => handleAddToCart(recipe)}
                        >
                          Thêm vào giỏ
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-5 text-gray-500 text-center">
                Không có dữ liệu
              </p>
            )}
          </div>
          {total > 0 && (
            <div className="mt-6 flex justify-center">
              <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={total}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          )}
        </div>
      </div>

      <Modal
        title="Chi tiết món ăn"
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        width={800}
      >
        <DetailRecipe id={idRecipe} onAddToCart={onAddToCart} />
      </Modal>
    </div>
  );
};

export default Detail;
