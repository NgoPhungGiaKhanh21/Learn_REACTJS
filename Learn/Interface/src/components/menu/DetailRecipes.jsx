import React, { useEffect, useState } from "react";
import { Button, InputNumber } from "antd";

const DetailRecipe = ({ id, onAddToCart }) => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Reset quantity to 1 whenever the id changes
  useEffect(() => {
    setQuantity(1);
    if (!id) return;

    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        console.error("Lỗi khi lấy chi tiết món ăn:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleAddToCart = () => {
    if (recipe) {
      onAddToCart({
        id: recipe.id,
        name: recipe.name,
        image: recipe.image,
        quantity: quantity,
      });
      setQuantity(1);
    }
  };

  if (!id)
    return (
      <div className="text-center text-gray-500 py-10">
        Vui lòng chọn một món ăn để xem chi tiết
      </div>
    );
  if (loading)
    return <div className="text-center text-gray-600 py-10">Đang tải...</div>;
  if (!recipe)
    return (
      <div className="text-center text-red-500 py-10">
        Không tìm thấy món ăn
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-32 h-32 rounded-full object-cover shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{recipe.name}</h2>
          <p className="text-gray-600">{recipe.cuisine}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-600">
            <strong>Thời gian chuẩn bị:</strong> {recipe.prepTimeMinutes} phút
          </p>
          <p className="text-sm text-gray-600">
            <strong>Thời gian nấu:</strong> {recipe.cookTimeMinutes} phút
          </p>
          <p className="text-sm text-gray-600">
            <strong>Phục vụ:</strong> {recipe.servings} người
          </p>
          <p className="text-sm text-gray-600">
            <strong>Độ khó:</strong> {recipe.difficulty}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            <strong>Calories:</strong> {recipe.caloriesPerServing} kcal
          </p>
          <p className="text-sm text-gray-600">
            <strong>Đánh giá:</strong> {recipe.rating} ({recipe.reviewCount}{" "}
            lượt)
          </p>
          <p className="text-sm text-gray-600">
            <strong>Thể loại:</strong>{" "}
            {recipe.mealType?.join(", ") || "Không xác định"}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Nguyên liệu
        </h3>
        <ul className="list-disc pl-5 text-gray-600">
          {recipe.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Hướng dẫn thực hiện
        </h3>
        <ol className="list-decimal pl-5 text-gray-600 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Tags</h3>
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
      </div>

      <div className="flex items-center gap-4">
        <div>
          <label className="text-gray-800 font-semibold">Số lượng: </label>
          <InputNumber
            min={1}
            value={quantity}
            onChange={(value) => setQuantity(value)}
            className="ml-2"
          />
        </div>
        <Button
          style={{ backgroundColor: "green", color: "white" }}
          onClick={handleAddToCart}
        >
          Thêm vào giỏ hàng
        </Button>
      </div>
    </div>
  );
};

export default DetailRecipe;
